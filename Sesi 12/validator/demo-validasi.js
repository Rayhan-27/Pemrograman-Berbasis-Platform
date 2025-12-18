const express = require('express');
const { body, validationResult } = require('express-validator');
const Joi = require('joi');

const app = express();
const port = 3200;

// Middleware untuk parsing JSON
app.use(express.json());

// Simulasi database sederhana (untuk demo)
let users = [];
let products = [];

// ============================================
// CONTOH 1: Validasi dengan express-validator
// ============================================

// Middleware validasi untuk registrasi user
const validateRegister = [
  body('nama')
    .trim()
    .notEmpty()
    .withMessage('Nama tidak boleh kosong')
    .isLength({ min: 3, max: 50 })
    .withMessage('Nama harus antara 3-50 karakter'),
  
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email tidak boleh kosong')
    .isEmail()
    .withMessage('Format email tidak valid')
    .normalizeEmail(),
  
  body('password')
    .isLength({ min: 8 })
    .withMessage('Password minimal 8 karakter')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
    .withMessage('Password harus mengandung huruf kecil, huruf besar, dan angka'),
  
  body('umur')
    .optional()
    .isInt({ min: 17, max: 100 })
    .withMessage('Umur harus antara 17-100 tahun'),
  
  body('noHp')
    .optional()
    .matches(/^08[0-9]{9,12}$/)
    .withMessage('Nomor HP harus dimulai dengan 08 dan 9-12 digit')
];

// Route POST /register dengan express-validator
app.post('/register', validateRegister, (req, res) => {
  // Cek hasil validasi
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validasi gagal',
      errors: errors.array().map(err => ({
        field: err.path,
        message: err.msg
      }))
    });
  }

  // Cek apakah email sudah terdaftar
  const existingUser = users.find(u => u.email === req.body.email);
  if (existingUser) {
    return res.status(409).json({
      success: false,
      message: 'Email sudah terdaftar'
    });
  }

  // Simpan user (dalam aplikasi nyata, ini akan disimpan ke database)
  const newUser = {
    id: users.length + 1,
    nama: req.body.nama,
    email: req.body.email,
    password: req.body.password, // Dalam aplikasi nyata, password harus di-hash
    umur: req.body.umur,
    noHp: req.body.noHp,
    createdAt: new Date().toISOString()
  };

  users.push(newUser);

  res.status(201).json({
    success: true,
    message: 'Registrasi berhasil',
    data: {
      id: newUser.id,
      nama: newUser.nama,
      email: newUser.email
    }
  });
});

// ============================================
// CONTOH 2: Validasi dengan Joi
// ============================================

// Schema validasi untuk produk menggunakan Joi
const productSchema = Joi.object({
  nama: Joi.string()
    .min(3)
    .max(100)
    .required()
    .messages({
      'string.min': 'Nama produk minimal 3 karakter',
      'string.max': 'Nama produk maksimal 100 karakter',
      'string.empty': 'Nama produk tidak boleh kosong',
      'any.required': 'Nama produk wajib diisi'
    }),
  
  harga: Joi.number()
    .positive()
    .required()
    .messages({
      'number.base': 'Harga harus berupa angka',
      'number.positive': 'Harga harus lebih dari 0',
      'any.required': 'Harga wajib diisi'
    }),
  
  stok: Joi.number()
    .integer()
    .min(0)
    .required()
    .messages({
      'number.base': 'Stok harus berupa angka',
      'number.integer': 'Stok harus berupa bilangan bulat',
      'number.min': 'Stok tidak boleh negatif',
      'any.required': 'Stok wajib diisi'
    }),
  
  kategori: Joi.string()
    .valid('elektronik', 'pakaian', 'makanan', 'buku', 'lainnya')
    .required()
    .messages({
      'any.only': 'Kategori harus salah satu dari: elektronik, pakaian, makanan, buku, lainnya',
      'any.required': 'Kategori wajib diisi'
    }),
  
  deskripsi: Joi.string()
    .max(500)
    .optional()
    .messages({
      'string.max': 'Deskripsi maksimal 500 karakter'
    })
});

// Route POST /product dengan Joi validation
app.post('/product', (req, res) => {
  // Validasi menggunakan Joi
  const { error, value } = productSchema.validate(req.body, {
    abortEarly: false // Mengembalikan semua error, bukan hanya yang pertama
  });

  if (error) {
    const errorMessages = error.details.map(detail => ({
      field: detail.path.join('.'),
      message: detail.message
    }));

    return res.status(400).json({
      success: false,
      message: 'Validasi gagal',
      errors: errorMessages
    });
  }

  // Simpan produk
  const newProduct = {
    id: products.length + 1,
    ...value,
    createdAt: new Date().toISOString()
  };

  products.push(newProduct);

  res.status(201).json({
    success: true,
    message: 'Produk berhasil ditambahkan',
    data: newProduct
  });
});

// ============================================
// CONTOH 3: Error Handling dengan Try-Catch
// ============================================

// Route untuk mendapatkan user by ID dengan error handling
app.get('/user/:id', (req, res) => {
  try {
    const userId = parseInt(req.params.id);

    // Validasi manual
    if (isNaN(userId)) {
      return res.status(400).json({
        success: false,
        message: 'ID harus berupa angka'
      });
    }

    const user = users.find(u => u.id === userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User tidak ditemukan'
      });
    }

    // Hapus password dari response
    const { password, ...userWithoutPassword } = user;

    res.json({
      success: true,
      data: userWithoutPassword
    });

  } catch (error) {
    // Error handling untuk kesalahan yang tidak terduga
    console.error('Error saat mengambil user:', error);
    res.status(500).json({
      success: false,
      message: 'Terjadi kesalahan pada server',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// ============================================
// CONTOH 4: Error Handling Middleware
// ============================================

// Route yang mungkin menghasilkan error
app.get('/divide', (req, res) => {
  try {
    const { a, b } = req.query;
    
    if (!a || !b) {
      return res.status(400).json({
        success: false,
        message: 'Parameter a dan b wajib diisi'
      });
    }

    const numA = parseFloat(a);
    const numB = parseFloat(b);

    if (isNaN(numA) || isNaN(numB)) {
      return res.status(400).json({
        success: false,
        message: 'Parameter a dan b harus berupa angka'
      });
    }

    if (numB === 0) {
      return res.status(400).json({
        success: false,
        message: 'Pembagi tidak boleh nol'
      });
    }

    const result = numA / numB;

    res.json({
      success: true,
      data: {
        a: numA,
        b: numB,
        result: result
      }
    });

  } catch (error) {
    console.error('Error dalam operasi pembagian:', error);
    res.status(500).json({
      success: false,
      message: 'Terjadi kesalahan saat melakukan operasi',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// ============================================
// CONTOH 5: Custom Error Handler Middleware
// ============================================

// Middleware untuk menangani error yang tidak tertangani
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);

  // Error dari Joi
  if (err.isJoi) {
    return res.status(400).json({
      success: false,
      message: 'Validasi error',
      errors: err.details.map(detail => ({
        field: detail.path.join('.'),
        message: detail.message
      }))
    });
  }

  // Error default
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Terjadi kesalahan pada server',
    error: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
});

// ============================================
// Route untuk melihat data (untuk testing)
// ============================================

app.get('/users', (req, res) => {
  res.json({
    success: true,
    count: users.length,
    data: users.map(u => {
      const { password, ...userWithoutPassword } = u;
      return userWithoutPassword;
    })
  });
});

app.get('/products', (req, res) => {
  res.json({
    success: true,
    count: products.length,
    data: products
  });
});

// Route root
app.get('/', (req, res) => {
  res.json({
    message: 'Demo Validasi Data dan Pengelolaan Error',
    endpoints: {
      'POST /register': 'Registrasi user dengan express-validator',
      'POST /product': 'Tambah produk dengan Joi validation',
      'GET /user/:id': 'Ambil user by ID dengan error handling',
      'GET /divide?a=10&b=2': 'Operasi pembagian dengan validasi',
      'GET /users': 'Lihat semua users',
      'GET /products': 'Lihat semua products'
    }
  });
});

// Jalankan server
app.listen(port, () => {
  console.log(`\nServer berjalan di http://localhost:${port}`);
  console.log(`\nContoh penggunaan:`);
  console.log(`   POST http://localhost:${port}/register`);
  console.log(`   POST http://localhost:${port}/product`);
  console.log(`   GET  http://localhost:${port}/user/1`);
  console.log(`   GET  http://localhost:${port}/divide?a=10&b=2\n`);
});


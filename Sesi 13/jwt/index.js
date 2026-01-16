const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;
const SECRET_KEY = 'rahasia-negara-api-key';

// Middleware untuk memparsing body request
app.use(bodyParser.json());

// 1. Route Login
// Menerima username untuk menghasilkan token
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    // validasi sederhana
    if (!username) {
        return res.status(400).json({ message: 'Username diperlukan' });
    }

    // Payload: data yang ingin disimpan dalam token
    const payload = {
        username: username,
        role: 'mahasiswa'
    };

    // Membuat token
    // jwt.sign(payload, secretKey, options)
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '30s' }); //token di masukkan di header authorization ("Brearer" + Token) atau auth bearer

    console.log('Generated Token:', token);

    res.json({
        message: 'Login berhasil',
        token: token
    });
});

// Middleware autentikasi
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Akses ditolak: Token tidak ditemukan' });
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Token tidak valid atau kadaluarsa' });
        }
        req.user = user;
        next();
    });
};

// Data Mock Mahasiswa
const users = [
    { nim: '123', nama: 'Budi Santoso', jurusan: 'Teknik Informatika' },
    { nim: '456', nama: 'Siti Aminah', jurusan: 'Sistem Informasi' },
    { nim: '789', nama: 'Andi Wijaya', jurusan: 'Teknik Komputer' }
];

// 2. Route Terproteksi
// hanya bisa diakses jika mengirimkan token yang valid
app.get('/api/data-mahasiswa', authenticateToken, (req, res) => {
    res.json({
        message: 'Ini adalah data rahasia mahasiswa',
        user: req.user,
        data: users
    });
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const secretKey = 'matakuadadua'; // Secret key untuk JWT signing

// Middleware untuk verifikasi token
const verifyToken = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(403).send({ message: 'Akses ditolak, token tidak ada' });
    }

    try {
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).send({ message: 'Token tidak valid.' });
    }
};

// Contoh penggunaan middleware
app.get('/secure-endpoint', verifyToken, (req, res) => {
    const { username } = req.user;
    res.json({ message: `Akses diberikan, Selamat datang ${username}` });
});

app.listen(3000, () => {
    console.log('Server berjalan di port :3000');
});
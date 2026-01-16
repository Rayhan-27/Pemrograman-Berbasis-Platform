const jwt = require('jsonwebtoken');
const secretKey = 'matakuadadua';

const user = {
    id: 1,
    username: 'Rayhan Sandika Ardaffa'
};

const token = jwt.sign(user,secretKey, { expiresIn: '1h' });
console.log('Token:', token);
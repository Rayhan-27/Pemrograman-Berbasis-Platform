const pengurangan = (a,b) => {
    const hasil = a - b; // operasi pengurangan
    return `Hasil pengurangan ${a} dan ${b} adalah ${hasil}` ;
};

module.exports = {pengurangan}; // ekspor fungsi pengurangan agar bisa digunakan di file lain
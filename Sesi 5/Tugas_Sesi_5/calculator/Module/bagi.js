const pembagian = (a,b) => {
    const hasil = a / b; // operasi pembagian
    return `Hasil pembagian ${a} dan ${b} adalah ${hasil}` ;
};

module.exports = {pembagian}; // ekspor fungsi pembagian agar bisa digunakan di file lain
const pertambahan = (a,b) => {
    const hasil = a + b; // operasi penjumlahan
    return `Hasil pertambahan ${a} dan ${b} adalah ${hasil}` ;
};

module.exports = {pertambahan}; // ekspor fungsi pertambahan agar bisa digunakan di file lain
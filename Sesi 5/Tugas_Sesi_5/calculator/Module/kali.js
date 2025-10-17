const perkalian = (a,b) => {
    const hasil = a * b; // operasi perkalian
    return `Hasil perkalian ${a} dan ${b} adalah ${hasil}` ;
};

module.exports = {perkalian}; // ekspor fungsi perkalian agar bisa digunakan di file lain
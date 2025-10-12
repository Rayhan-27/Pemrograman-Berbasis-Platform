// Data dari form
let inputMobil = {
    merk : "Suzuki",
    tahun : 2022,
    warna : "Biru"
};

inputMobil.merk = ""; //bila data merk dihapus maka akan gagal validasi

// Validasi Sederhana
if(inputMobil.merk && inputMobil.tahun) { //akan di cek apakah properti merk dan tahun sudah diisi
    console.log("Data siap dikirim ke database:", inputMobil);
} else {
    console.log("Data tidak lengkap!");
}
// Object Literal
let mobil = {
    merk : "Toyota",
    tahun : 2020,
    warna : "Merah",
    posisi : "Sedang Berjalan",

    kondisi : function() {
        console.log(`${this.merk} tahun ${this.tahun} ${this.posisi}`);
    }
};

mobil.merk = "Honda";
mobil.tahun = 2025;
mobil.warna = "Putih";
mobil.posisi = "Sedang Parkir";

// Mengakses properti pada object
console.log(mobil.merk);
console.log(mobil.tahun);
console.log(mobil.warna);

// Memanggil method
mobil.kondisi();
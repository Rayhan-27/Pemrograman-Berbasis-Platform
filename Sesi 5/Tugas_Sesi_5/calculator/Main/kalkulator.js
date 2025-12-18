const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let a, b; // membuat variabel a dan b

let opsi = ""; // variabel untuk menyimpan pilihan operasi

function menu(){ // menampilkan menu
    console.log("Pilih operasi matematika:");
    console.log("1. Pertambahan (+)");
    console.log("2. Pengurangan (-)");
    console.log("3. Perkalian (*)");
    console.log("4. Pembagian (/)");
}

function pilihMenu(){ // fungsi untuk memilih menu
    rl.question('Masukkan pilihan (1/2/3/4): ', (jawaban) => {
        opsi = jawaban;
        if (!['1', '2', '3', '4'].includes(opsi)) { // bila input bukan 1,2,3,4
            console.log("Pilihan tidak valid. Silakan pilih antara 1, 2, 3, atau 4.");
            menu(); // tampilkan menu lagi
            pilihMenu(); // panggil fungsi pilihMenu lagi agar bisa memilih ulang
        }

        else if (opsi == '1') { // jika pilihan 1
            rl.question('Masukkan angka pertama: ', (jawaban1) => { // meminta input angka pertama
                a = parseFloat(jawaban1); //ubah input string menjadi angka desimal
                rl.question('Masukkan angka kedua: ', (jawaban2) => { // meminta input angka kedua
                    b = parseFloat(jawaban2);
                    const { pertambahan } = require('../Module/tambah'); // import fungsi pertambahan
                    console.log(pertambahan(a, b)); // panggil fungsi pertambahan dan tampilkan hasilnya
                    rl.close(); // tutup readline interface
                });
            });
        }

        else if (opsi == '2') { // jika pilihan 2
            rl.question('Masukkan angka pertama: ', (jawaban1) => {
                a = parseFloat(jawaban1);
                rl.question('Masukkan angka kedua: ', (jawaban2) => {
                    b = parseFloat(jawaban2);
                    const { pengurangan } = require('../Module/kurang');
                    console.log(pengurangan(a, b));
                    rl.close();
                });
            });
        }

        else if (opsi == '3') { // jika pilihan 3
            rl.question('Masukkan angka pertama: ', (jawaban1) => {
                a = parseFloat(jawaban1);
                rl.question('Masukkan angka kedua: ', (jawaban2) => {
                    b = parseFloat(jawaban2);
                    const { perkalian } = require('../Module/kali');
                    console.log(perkalian(a, b));
                    rl.close();
                });
            });
        }

        else if (opsi == '4') { // jika pilihan 4
            rl.question('Masukkan angka pertama: ', (jawaban1) => {
                a = parseFloat(jawaban1);
                rl.question('Masukkan angka kedua: ', (jawaban2) => {
                    b = parseFloat(jawaban2);
                    const { pembagian } = require('../Module/bagi');
                    console.log(pembagian(a, b));
                    rl.close();
                });
            });
        }
    });

}

menu(); // panggil fungsi menu untuk menampilkan menu
pilihMenu(); // panggil fungsi pilihMenu untuk memilih menu
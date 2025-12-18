const readline = require('readline'); //import readline untuk input dari user

const rl = readline.createInterface({ //membuat interface untuk input dan output
  input: process.stdin, //input dari user
  output: process.stdout //output ke console
})

let nama, umur, tTinggal, tabungan; //deklarasi variabel
rl.question('Masukkan nama: ', (inputNama) => { //input nama
  nama = inputNama; //menyimpan input nama ke variabel nama
  rl.question('Masukkan umur: ', (inputUmur) => { //input umur
    umur = Number(inputUmur); //menyimpan input umur ke variabel umur dan mengubahnya ke number
    rl.question('Masukkan tempat tinggal: ', (inputTTinggal) => { //input tempat tinggal
      tTinggal = inputTTinggal; //menyimpan input tempat tinggal ke variabel tTinggal
      rl.question('Masukkan jumlah tabungan: ', (inputTabungan) => { //input tabungan
        tabungan = Number(inputTabungan); //menyimpan input tabungan ke variabel tabungan dan mengubahnya ke number

        let pangkat = ""; //menampung hasil pangkat mafia


        if (umur > 40 && (tTinggal === "Nevada" || tTinggal === "New York" || tTinggal === "Havana") && tabungan > 10000000) {
          pangkat = "Don";
        } 
        else if (umur >= 25 && umur <= 40 && (tTinggal === "New Jersey" || tTinggal === "Manhattan" || tTinggal === "Nevada") && tabungan >= 1000000 && tabungan <= 2000000) {
          pangkat = "Underboss";
        } 
        else if (umur >= 18 && umur <= 24 && (tTinggal === "California" || tTinggal === "Detroit" || tTinggal === "Boston") && tabungan < 1000000) {
          pangkat = "Capo";
        }


        if (pangkat !== "") { //bila variabel pangkat ada isinya maka menampilkan nama dan pangkat
          console.log(`${nama} kemungkinan adalah seorang anggota mafia dengan pangkat ${pangkat}`);
        } else { //bila variabel pangkat kosong maka menampilkan nama dan tidak mencurigakan
          console.log(`${nama} tidak mencurigakan`);
        }

        rl.close(); //menutup interface setelah semua input diterima
      });
    });
  });
});
      


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let nilaiCoding, nilaiWawancara;

let hasilCoding = ""; //menampung hasil coding
let hasilWawancara = ""; //menampung hasil wawancara

rl.question('Masukkan nilai coding (0-100): ', (inputCoding) => {
  nilaiCoding = Number(inputCoding);
  rl.question('Masukkan nilai wawancara (A/B/C): ', (inputWawancara) => {
    nilaiWawancara = inputWawancara.toUpperCase();
    
    if (nilaiCoding > 80) {
      hasilCoding = "LOLOS";
    } else if (nilaiCoding >= 60 && nilaiCoding <=80){
      hasilCoding = "DIPERTIMBANGKAN";
    } else if (nilaiCoding >= 0 && nilaiCoding < 60){
      hasilCoding = "GAGAL";
    } else {
        hasilCoding = "ERROR";
    }
    
    if (nilaiWawancara == "A" || nilaiWawancara == "B") {
        hasilWawancara = "LOLOS";
    } else if (nilaiWawancara == "C") {
        hasilWawancara = "GAGAL";
    }
    
    if (hasilCoding == "LOLOS" && hasilWawancara == "LOLOS" || hasilCoding == "DIPERTIMBANGKAN" && hasilWawancara == "LOLOS") {
        console.log("Selamat Kamu Berhasil Menjadi Calon Programmer");
    } else {
        console.log("Maaf Kamu Belum Berhasil Menjadi Calon Programmer");
    }

    rl.close();
  });
});


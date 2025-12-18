const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let umur, tinggi;

rl.question('Masukkan umur: ', (inputUmur) => {
    umur = Number(inputUmur);
    rl.question('Masukkan tinggi badan (dalam cm): ', (inputTinggi) => {
        tinggi = Number(inputTinggi);

        if (umur < 1){
            console.log("Dilarang masuk")
        } else if (umur >= 1 && umur <= 3){
            if (umur >= 2 && tinggi > 70){
                console.log("Rp 40.000")
            }
            else {
                console.log("Rp 30.000")
            }
        } else if (umur >= 4 && umur <=7){
            if (tinggi > 120){
                console.log("Rp 55.000")
            }
            else {
                console.log("Rp 40.000")
            }
        } else if (umur >= 8 && umur <=10){
            if (tinggi > 150){
                console.log("Rp 70.000")
            }
            else {
                console.log("Rp 50.000")
            }
        } else if (umur > 10){
            console.log("Rp 80.000")
        }
        
        rl.close();
    });
});

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let waktuLari, waktuPushUp, waktuPlank;

rl.question('Masukkan waktu lari (dalam menit): ', (inputLari) => {
  waktuLari = Number(inputLari);
    rl.question('Masukkan waktu push-up (dalam menit): ', (inputPushUp) => {
        waktuPushUp = Number(inputPushUp);
        rl.question('Masukkan waktu plank (dalam menit): ', (inputPlank) => {
            waktuPlank = Number(inputPlank);

            let kaloriLari = (60 / 5) * waktuLari; //(60/5) = 12 kalori permenit
            let kaloriPushUp = (200 / 30) * waktuPushUp; //(200/30) = 6.67 kalori permenit
            let kaloriPlank = (5 / 1) * waktuPlank; //(5/1) = 5 kalori permenit
            
            let totalKalori = kaloriLari + kaloriPushUp + kaloriPlank;
            
            console.log(`Total kalori yang terbakar adalah ${totalKalori} kalori`);

            rl.close();
        });
    });
});



const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let nomor;

rl.question('Masukkan nomor punggung: ', (inputNomor) => {
  nomor = Number(inputNomor);
  
  if (nomor % 2 == 0){
      if (nomor >= 50 && nomor <=100){
          console.log("berhak dipilih menjadi capten team")
      }
      else {
          console.log("target attacker")
      }
  } 
  else if (nomor % 2 != 0) {
      if (nomor % 3 == 0 && nomor % 5 == 0){
          if(nomor > 90){
              console.log("Playmaker")
          }
          else {
              console.log("keeper")
          }
      }
      else {
          console.log("defender")
      }
  }
  
  rl.close();
});

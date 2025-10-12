var motoGP = [
    {
        circuit : 'Losail',
        location : 'Qatar',
        winner : {
            firstName : 'Andrea',
            lastName : 'Dovizioso',
            country : 'Italy'
        }
    },
    {
        circuit : 'Autodromo',
        location : 'Argentine',
        winner : {
            firstName : 'Cal',
            lastName : 'Crutchlow',
            country : 'UK'
        }
    },
    {
        circuit : 'De Jerez',
        location : 'Spain',
        winner : {
            firstName : 'Valentino',
            lastName : 'Rossi',
            country : 'Italy'
        }
    },
    {
        circuit : 'Mugello',
        location : 'Italy',
        winner : {
            firstName : 'Andrea',
            lastName : 'Dovizioso',
            country : 'Italy'
        }
    }
]

let result = {}; //untuk menampung hasil akhir

for (let i = 0; i < motoGP.length; i++) {
  let event = motoGP[i];                    // Ambil 1 data event MotoGP
  let country = event.winner.country;       // Ambil negara pemenang
  let winnerName = event.winner.firstName + " " + event.winner.lastName; // Gabungkan nama depan & belakang
  let winLocation = event.circuit + ", " + event.location; // Gabungkan sirkuit dan lokasi

  if (!result[country]) { // Cek apakah negara pemenang sudah ada di objek result atau belum
    result[country] = { // Jika belum ada, buat struktur awal untuk negara tersebut
      winningCircuits: [],
      totalWin: 0
    };
  }

  result[country].winningCircuits.push({ // Tambah data sirkuit kemenangan sesuai negara yang sama
    name: winnerName,
    winLocation: winLocation
  });

  result[country].totalWin++; // Tambah total kemenangan untuk negara tersebut
}

console.dir(result, { depth : null, colors : true }); 
//pakai dir biar bisa tampilin objek bersarang (nested object) secara lengkap di console
//dept di set null biar tampilin semua level kedalaman objek dan colors tambahan aja biar console lebih berwarna
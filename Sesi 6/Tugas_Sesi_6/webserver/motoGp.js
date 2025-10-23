const http = require('http');

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

const port = 8000;

const server = http.createServer((req, res) => {
    
    if (req.url === '/') { //semua data motoGP
        res.writeHead(200, { 'Content-Type': 'application/json' }); //data akan dikirim dalam format JSON
        res.end(JSON.stringify(motoGP, null, 2));
        //res.end() = mengakhiri response dan mengirimkannya ke client
        //JSON.stringify() = ubah data JavaScript (array atau objek) jadi teks JSON
        //null, 2 = format teks JSON dengan indentasi 2 spasi agar mudah dibaca

    } else if (req.url === '/country') { //berdasarkan negara pemenang
        const kelompokCountry = {}; //objek kosong untuk menyimpan hasil pengelompokan

        motoGP.forEach(race => { //looping setiap elemen dalam array motoGP
            const country = race.winner.country; //ambil negara pemenang
            if (!kelompokCountry[country]) { //kalau negara itu belum ada di wadah, buatkan dulu array kosongnya.
                kelompokCountry[country] = []; 
            }
            kelompokCountry[country].push(race); //masukkan data balapan ke dalam array negara yang sesuai
        });
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(kelompokCountry, null, 2)); //kirim hasil pengelompokan sebagai response 

    } else if (req.url === '/name') { //berdasarkan nama pemenang
        const kelompokName = {}; //objek kosong untuk menyimpan hasil pengelompokan

        motoGP.forEach(race => { //looping setiap elemen dalam array motoGP
            const name = `${race.winner.firstName} ${race.winner.lastName}`; //gabungkan nama depan dan belakang pemenang
            if (!kelompokName[name]) { //kalau nama itu belum ada di wadah, buatkan dulu array kosongnya.
                kelompokName[name] = []; 
            }
            kelompokName[name].push(race); //masukkan data balapan ke dalam array nama yang sesuai
        });
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(kelompokName, null, 2)); //kirim hasil pengelompokan sebagai response

    } else { //jika endpoint tidak dikenali
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('Bad Request');
    }
});

// Menjalankan server
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
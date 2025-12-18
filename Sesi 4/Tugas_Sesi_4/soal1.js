let studentScore = [
    {
        name : 'Andi',
        score : 90
    },
    {
        name : 'Rudi',
        score : 80
    },
    {
        name : 'Dira',
        score : 100
    },
]

let nilaiTerbesar = studentScore[0]; // Inisialisasi dengan elemen pertama sebagai patokan awal

for (let i = 1 ; i < studentScore.length; i++) { //dimulai dari indeks 1 karena indeks 0 sudah dijadikan patokan awal
    if (studentScore[i].score > nilaiTerbesar.score) { //score i dibandingkan dengan score patokan awal
        nilaiTerbesar = studentScore[i];
    }
}

console.log(`Nilai terbesar diperoleh oleh ${nilaiTerbesar.name} dengan nilai ${nilaiTerbesar.score}`);
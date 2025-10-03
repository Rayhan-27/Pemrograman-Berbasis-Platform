let fruits = [
    ["Apple", 10000],
    ["Watermelon", 15000],
    ["Banana", 7000],
    ["Orange", 12000]
];

console.log(`${fruits[2][1]}`); //mengakses array fruits index ke 2 yaitu "Banana" dan index ke 1 yaitu harganya 7000

console.log("");
console.log("======== Menggunakan For...of ========");
console.log("");

for (let buah of fruits) { //buah adalah variabel yang akan menampung setiap isi dari array fruits
    console.log(`Nama: ${buah[0]}, Harga: ${buah[1]}`); //menggunakan template literal untuk menampilkan isi array fruits
}
    
// console.log("");
// console.log("======== Menggunakan Nested For Loop ========");
// console.log("");

// for (let b = 0 ; b < fruits.length; b++) { //fruits.length digunakan untuk mengetahui panjang array fruits
//     for(let k = 0 ; k < fruits[b].length; k++) { //fruits[b].length digunakan untuk mengetahui panjang array fruits pada index ke b
//         console.log(fruits[b][k]); //menggunakan template literal untuk menampilkan isi array fruits
//     }
// }
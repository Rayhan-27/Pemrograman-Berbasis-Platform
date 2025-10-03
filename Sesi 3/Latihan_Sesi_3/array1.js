let fruits = ["Apple", "Watermelon", "Banana", "Orange"];

console.log(fruits[0]); //mengakses array fruits index ke 0 yaitu "Apple"
console.log(fruits[1]); //mengakses array fruits index ke 1 yaitu "Watermelon"
console.log(fruits[2]); //mengakses array fruits index ke 2 yaitu "Banana"
console.log(fruits[3]); //mengakses array fruits index ke 3 yaitu "Orange"
console.log(fruits[4]); //mengakses array fruits index ke 4 yaitu undefined karena index ke 4 tidak ada isinya
console.log(fruits);

console.log("");
console.log("======== Menggunakan For Loop ========");
console.log("");

for (let k = 0 ; k < fruits.length; k++) { //fruits.length digunakan untuk mengetahui panjang array fruits
    console.log(`Isi dari Array ke ${k} : ${fruits[k]}`); //menggunakan template literal untuk menampilkan isi array fruits
}
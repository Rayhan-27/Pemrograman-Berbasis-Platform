let isEvenOrOdd = (number) => { //let adalah variabel yang nilainya bisa diubah dan number adalah parameternya
    if (number % 2 == 0) { 
        return "Bilangan Genap";
    }
    return "Bilangan Ganjil";
}

console.log(isEvenOrOdd(5));
console.log(isEvenOrOdd(10));
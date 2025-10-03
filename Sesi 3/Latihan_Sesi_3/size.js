let isSize = (size) => { 
    switch(size) {
        case "S": //apabila parameter size bernilai "S" maka akan mengembalikan nilai "Small"
            return "Small";
            break; //break digunakan untuk menghentikan eksekusi setelah case terpenuhi agar tidak lanjut ke case berikutnya
        case "M":
            return "Medium";
            break;
        default: //default digunakan apabila tidak ada case yang terpenuhi maka akan mengembalikan nilai "Not Identified"
            return "Not Identified";
            break;
    }
}

console.log(isSize("S"));
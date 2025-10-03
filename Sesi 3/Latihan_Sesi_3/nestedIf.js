let username = "admin";
let password = "admin123";
let status;

if(username == "admin"){ //jika username sama dengan "admin" maka akan masuk ke if berikutnya, jika tidak maka akan masuk ke else
    if(password == "admin123"){ //jika password sama dengan "admin123" maka status akan diisi dengan "Successful Login"
        status = "Successful Login"; //status dicoret karena belum diberi nilai
    } else {
        status = "Wrong Password";
    }
} else {
    status = "Wrong Username";
}

console.log(status);
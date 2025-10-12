const studentData = {
    name : "Andi",
    javaProgramScore : 80,
    pythonProgrammingScore : 100,
    javascriptProgrammingScore : 80,

    infoStudent : function() { //menambahkan fungsi pada object
        return (
            "Name : " + this.name + "\n" +
            "Java Score : " + this.javaProgramScore + "\n" +
            "Python Score : " + this.pythonProgrammingScore + "\n" +
            "JS Score : " + this.javascriptProgrammingScore
        );
    }
};

studentData.idNumber = "1102020";
console.log(studentData); //bila infoStudent tidak dipanggil, maka properti idNumber tidak akan tampil pada output
let studentData = {
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

studentData.name = "Budi"; //mengubah nilai properti name pada object
console.log(studentData.infoStudent()); //output akan menampilkan name : Budi
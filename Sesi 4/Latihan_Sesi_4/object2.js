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


console.log(studentData.infoStudent()); //output dari fungsi pada object
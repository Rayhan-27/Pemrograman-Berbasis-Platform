function cetakNama(nama) {
    return `Hai, nama saya ${nama}`;
}

const Usia = 20;

const dataSiswa = {
    NIM: '20240040187',
    infoSiswa() {
        return "NIM : ", this.NIM;
    }
};

module.exports = { cetakNama, Usia, dataSiswa };
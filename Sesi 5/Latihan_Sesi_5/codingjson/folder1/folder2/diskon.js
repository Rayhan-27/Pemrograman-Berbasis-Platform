const getTotalBelanja = (totalBelanja) => {
    let nilaiDiskon = 0;

    if (totalBelanja > 1000000) {
        nilaiDiskon = 0.10;
    }
    else if (totalBelanja > 500000) {
        nilaiDiskon = 0.05;
    }
    const potongan = totalBelanja * nilaiDiskon;
    return totalBelanja = totalBelanja - potongan;
};

module.exports = getTotalBelanja;
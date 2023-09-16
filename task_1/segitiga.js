const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Masukkan penjang alas segitiga (dalam satuan tertentu): ', (alas) => {
  rl.question('Masukkan tinggi segitiga (dalam satuan tertentu): ', (tinggi) => {
    var luas = 0.5 * alas * tinggi
    console.log('Luas segitiga siku-siku adalah: ' + luas)
    var panjangSisiMiring = Math.sqrt(Math.pow(alas, 2) + Math.pow(tinggi, 2))
    console.log('Panjang sisi miring (hipotenusa): ' + panjangSisiMiring)
    rl.close();
  });
});



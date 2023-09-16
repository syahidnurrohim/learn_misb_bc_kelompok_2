const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Masukkan angka pertama: ', (angka1) => {
  rl.question('Masukkan angka kedua: ', (angka2) => {
    var perkalian = angka1 * angka2
    console.log('Hasil perkalian: ' + perkalian)
    rl.close();
  });
});



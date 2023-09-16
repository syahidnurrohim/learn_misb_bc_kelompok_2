const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Masukkan angka pertama: ', (angka1) => {
  rl.question('Masukkan angka kedua: ', (angka2) => {
    if (angka1 > angka2) {
      console.log(angka1 + ' lebih besar dari ' + angka2)
    } else if (angka1 < angka2) {
      console.log(angka2 + ' lebih besar dari ' + angka1)
    } else if (angka1 == angka2) {
      console.log('Angka-angka tersebut sama besar')
    }
    rl.close();
  });
});



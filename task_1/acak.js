const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var angka1 = getRandomInt(1, 10)
var angka2 = getRandomInt(1, 10)

console.log('angka pertama = ' + angka1)
console.log('angka kedua = ' + angka2)

rl.question('Berapa hasil dari ' + angka1 + ' + ' + angka2 + '? ', (jawaban) => {
  var hasil = angka1 + angka2
  if (hasil == jawaban) {
    console.log('Selamat, jawaban Anda benar!')
  } else {
    console.log('Maaf, jawaban Anda salah. Jawaban yang benar adalah ' + hasil)
  }
  rl.close();
});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

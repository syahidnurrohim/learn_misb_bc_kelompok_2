const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Masukkan harga item pertama: ', (item1) => {
  rl.question('Masukkan harga item kedua: ', (item2) => {
    rl.question('Masukkan harga item ketiga: ', (item3) => {
      var penjumlahan = parseInt(item1) + parseInt(item2) + parseInt(item3)
      console.log('Total harga belanjaan: ' + penjumlahan)
      rl.close();
    });
  });
});



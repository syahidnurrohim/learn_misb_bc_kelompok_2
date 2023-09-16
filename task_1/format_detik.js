const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Masukkan jumlah detik: ', (seconds) => {
  var hours = Math.floor(seconds / 3600);
  var minutes = Math.floor((seconds % 3600) / 60);
  var remainingSeconds = seconds % 60;
  console.log('Waktu dalam format jam:menit:detik = ' + hours + ':' + minutes + ':' + remainingSeconds)
  rl.close();
});



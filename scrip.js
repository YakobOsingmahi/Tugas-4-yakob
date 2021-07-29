// Soal nomor 1

function tokoOnline(namaPembeli, produkDibeli) {
  return 'Terima kasih' + namaPembeli + 'telah membeli' + produkDibeli + 'kami';
}
console.log(tokoOnline(' yos ', ' pakayan '));

// // Soal nomor 2

function toCelcius(f) {
  return (5 / 9) * (f - 32);
}
console.log(toCelcius(15));

function toFahrenhait(c) {
  return (c * 9) / 5 + 32;
}
console.log(toFahrenhait(20));

// // Soal nomor 3

function hitungUsia(usiaKucing) {
  if (usiaKucing == 1) {
    console.log(15);
  } else if (usiaKucing == 2) {
    console.log(24);
  } else {
    console.log((usiaKucing - 2) * 4 + 24);
  }
}
hitungUsia(4);
// // Soal nomor 4

let ubahHuruf = (kalimat) => {
  return kalimat.toLowerCase();
};
console.log(ubahHuruf('YAKOB OSINGMAHI'));

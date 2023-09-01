const rl = require('readline-sync');
const colors = require('colors');
const title = require('./modules/title.js');
const fastBomber = require('./modules/sms.js');
const clear = require('clear');
const clc = require('cli-color');

clear();
const darkGreen = '\u001b[31m';
const bold = '\u001b[125m';
const reset = '\u001b[0m';

const text = 'OMİCRON SMS BOOMBER!?';
const formattedText = `${bold}${darkGreen}${text}${reset}`;

const text2 = "İletişim; discord: omicr0n || github: omicr0nn"

  console.log(formattedText);
  console.log('\x1b[94m');
  console.log('Aramıza Hoşgeldin. İnsanlara zarar vermeye çalışıp hackerım diye geçinmiyorsun değilmi :)');
  console.log('\u001b[35m'+ text2);
  console.log('\x1b[0m'); 



let telefon = rl.question('Telefon Numarasi Giriniz +90: ' .green);
if (telefon.length != 10) {
    console.log('Telefon Numarasi 10 Haneli Olmalidir. Ex: 5401234521'.red);
    process.exit(1);
}
title('Numara: ' + telefon);

let miktar = rl.question("Kac Adet SMS Gondermek Istiyorsunuz: ".green);
if(isNaN(miktar)) return console.log('Lutfen Bir Rakam Giriniz'.red) && process.exit(1);
if (miktar.length == 0) {
    console.log('Miktar Giriniz'.red);
    process.exit(1);
}
title(`Telefon: ${telefon} - Miktar: ${miktar}`);

console.log('SMS Gonderiliyor...'.rainbow);

fastBomber(telefon, miktar);

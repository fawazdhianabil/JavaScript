/*destructuring object + function*/
const identitas = {
	nama: 'Nabil',
	umur:24,
	IPK:4.00
}

function biodata({nama,umur,IPK}){
	console.log(`Saya ${nama} Umurnya ${umur} dan IPK Saya ${IPK}`)
}
biodata(identitas);

/* function + parameter default*/
function pangkat(a, b = 2) {
    let result = a ** b;
    console.log(`Hasil Pangkat ${a}^${b} = ${result}`);
}
pangkat(5);

/* function + rest parameter*/
function sum(...array) {
    let result = 0;
    for (let number of array){
    result += number;
    }
    return result;
}
let sum1 = sum(1,2,3,4,5);
console.log('Hasil Penjumlahan 1+2+3+4+5 adalah ' + sum1)

/* arrow function */
// 1 parameter //
const Nama = (nama) => {
    console.log(`Nama saya ${nama}`)
}

const Nama1 = nama => {
    console.log(`Nama saya ${nama}`)
}

// Tanpa Parameter //
const dunia = () => {
	console.log(`Dunia Kita`)
}

//Jika Terdiri dari 1 Baris, Kurawal dapat dihapus //
const Nama2 = nama => console.log(`Nama saya ${nama}`)
const dunia2 = () => console.log(`Dunia Kamu`)

//Jika Terdiri dari 1 Baris, Tanpa Return //
const kali = (a,b) => a*b

Nama("Nabil");
Nama1("Nabil Andi");
Nama1("Nabil Andi F");
dunia();
dunia2();
console.log(kali(10,10))
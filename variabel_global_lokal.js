function kali(num) {
// total variabel global //
    total = num * num;
// total1 variabel lokal
    const total1 = num*num
    return total1;
}

let total = 9; //ikut variabel global//
let number  = kali(20);

console.log(total)
console.log(number)
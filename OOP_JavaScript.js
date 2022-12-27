// Membuat sebuah class dengan constructor
class Motor{
    constructor(merk, warna, kecepatan, nopol,jarak){
        this.merk = merk;
        this.warna = warna;
        this.kecepatan = kecepatan;
        this.nopol = nopol;
        this.jarak = jarak;
    }
    
    drive(){
        console.log(`Mengendarai Motor ${this.merk} ${this.warna} ${this.kecepatan} ${this.nopol}`)
    }

    service(){
        console.log(`Motor Anda perlu diService pada jarak ${this.jarak}`)
    }

}


// Membuat Objek Motor dengan Constructor Function Motor
const mot1 = new Motor('Yamaha','Black',200,'AB2345DD','25KM');
console.log(mot1);
mot1.drive();
mot1.service();
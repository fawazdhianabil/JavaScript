/* closure function */
function closure() {
    var name = 'Nabil';   // Variabel lokal di dalam scope fungsi closure
    
    function sapa() {      // Inner function, merupakan contoh closure
        console.log(`Halo, ${name}`);   // Memanggil variabel yang dideklarasikan di parent function
    }

    sapa();
}
closure();

//closure function return//
function closure1() {
    var name = 'Nabil';   // Variabel lokal di dalam scope fungsi closure
    
    function sapa1() {      // Inner function, merupakan contoh closure
        console.log(`Halo, ${name}`);   // Memanggil variabel yang dideklarasikan di parent function
    }

    return sapa1;
}
let tesClosure = closure1();
tesClosure()

// closure private //
let tambah = () => {
    let c = 0;
    return () => {
        return ++c;
    };
}

let tambah_c = tambah();

console.log(tambah_c()); // 0 tambah 1//
console.log(tambah_c()); // 1 tambah 1 //
console.log(tambah_c()); // 2 tambah 1 //
console.log(tambah_c()); // 3 tambah 1 //
console.log(tambah_c()); // 4 tambah 1 //

/* output
1
2
3
 */
class Animal{
    constructor(name,age,isMammal){
        this.name = name;
        this.age = age;
        this.isMammal = isMammal;

    }

}

class Rabbit extends Animal{
    eat(name,age,isMammal){
        return (`${this.name} sedang makan!`)
    }
}

class Eagle extends Animal{
    fly(name,age,isMammal){
        return (`${this.name} sedang terbang!`)
    }
}


const myRabbit = new Rabbit("Labi",2,true)
const myEagle = new Eagle('Elo',4,false)
console.log(myRabbit.eat())
console.log(myEagle.fly())
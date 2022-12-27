// impure function
phi = 3.14; // terdapat nilai parameter di luar function
const luaslingkaran = (jarijari) => {
    return phi * (jarijari*jarijari);
}
console.log(luaslingkaran(7));

//pure function
const luaslingkaran2 = (jarijari) => {
    return 3.14 * (jarijari*jarijari);
}
console.log(luaslingkaran2(7));

// immutability
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamesWithExcMark = names.map((name) => `${name}!`);

console.log({
    names,
    newNamesWithExcMark,
});

// mutability
const user = {
    firstname: 'Harry',
    lastName: 'Potter',
}

const createUserWithNewLastName = (newLastName, user) => {
    return { ...user, lastName: newLastName }
}

const newUser = createUserWithNewLastName('Iskandar', user);

console.log(newUser);

// rekursif
const sekuensial = (start,end) => {
    console.log(start);
    if(start < end) sekuensial(start+1,end);
  };
  
  sekuensial(0,10);

  // higher order function
  const hello = () => {
    console.log('Hello!')
  };
  
  const say = (someFunction) => {
    someFunction();
  }
  
  const sayHello = () => {
      return () => {
          console.log('Hello!');
      }
  }
  
  hello();
  say(hello);
  sayHello()();
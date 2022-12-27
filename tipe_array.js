// array map
const newArray = ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => { return `${name}!`});

console.log(newArray);

// array filter
const truthyArray = [1, '', 'Hallo', 0, null, 'Harry', 14].filter((item) => Boolean(item));

console.log(truthyArray);

// array filter 2
const students1 = [
    {
      name: 'Harry',
      score: 60,
    },
    {
      name: 'James',
      score: 88,
    },
    {
      name: 'Ron',
      score: 90,
    },
    {
      name: 'Bethy',
      score: 75,
    }
];
  
const eligibleForScholarshipStudents = students1.filter((student) => student.score > 85);
  
console.log(eligibleForScholarshipStudents);

// array reduce
const students2 = [
    {
      name: 'Harry',
      score: 60,
    },
    {
      name: 'James',
      score: 88,
    },
    {
      name: 'Ron',
      score: 90,
    },
    {
      name: 'Bethy',
      score: 75,
    }
];
  
const totalScore = students2.reduce((acc, student) => acc + student.score, 0);
  
console.log(totalScore);

// array some
const array = [1, 2, 3, 4, 5];
const even = array.some(element => element % 2 === 0);
console.log(even);
  
// array find
const students = [
    {
      name: 'Harry',
      score: 60,
    },
    {
      name: 'James',
      score: 88,
    },
    {
      name: 'Ron',
      score: 90,
    },
    {
      name: 'Bethy',
      score: 75,
    }
];
  
const findJames = students.find(student => student.name === 'James');
console.log(findJames);

// array sort
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);

const array1 = [1, 30, 4, 1000, 101, 121];
array1.sort();
console.log(array1);

// array every
const scores = [70,85,90];
const minimumScore = 65;

const examPassed = scores.every(score => score >= minimumScore);
console.log(examPassed);


// array for each
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];
 
names.forEach((name) => {
  console.log(`Hello, ${name}!`);
});

// note pada array for each, array map dan array filter tidak bisa menggunakan break, continue
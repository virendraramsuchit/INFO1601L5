let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];// 10 elements

for(let i=0; i< arr.length; i++){
  console.log(arr[i])
}

//Task 2
let radius = 7;
const pi = 3.14;

let area = radius * radius * pi;

console.log(area);


//Task 3
let name = "bob";
let age = 24;

console.log(typeof(name))//string
console.log(typeof(age))//number

console.log(`Hello my name is ${name}, I'm ${age} years old`);
//Hello my name is bob, I'm 24 years old.

console.log(`I was born in ${2020 - age}`)
//I was born in 1966



//Task 4.1
console.log('1' == 1);
console.log(1 == true);
console.log("false" == false);
console.log("false" == true);

if("false")
  console.log("Hello false!");


//Task 4.2
console.log('1' === 1); //false
console.log(1 === true); //false
console.log("true" === true); //false


//Task 4.3
for(let i=0; i< 50; i++){
  if(i %3 === 0 && i%5 === 0){ // is divisible by 3 and 5?
    console.log('fizzbuzz');
  }else if(i%3 === 0){ // ok it's not divisible by both how about just 3?
    console.log('fizz');
  }else if(i%5 === 0){ //no? what about just 5 then?
    console.log('buzz');
  }else{              //so its not divisible by 3 or 5 then
    console.log(i);
  }
}


//Task 5
function happyPrint(string){
  console.log("😀: "+string);
 }
 
 function sadPrint(string){
  console.log("😢: "+string);
 }
 
 //This high-order function adds 2 parameters and passes the answer to the callback
 function add(a, b, callback){
    let ans = a + b;
    callback(ans);// call the callback and pass the answer to it
 }
 
 //call add passing the callbacks to it
 
 add(5, 10, happyPrint);
 add(11, 12, sadPrint);

 
 //Task 2 (No.7)
 //prints current date
 function printDate(){
  console.log(new Date().toLocaleTimeString());
}
     
setInterval(printDate, 1000);

//Task 5.1 (No.8)
let arr2 = [ -5, 16, 33, 42, 103, 344];

console.log(arr2.includes(-5));//true

arr2.push(11);//adds item to the end

console.log(arr2)//[ -5, 16, 33, 42, 103, 344, 11];

let lastItem = arr2.pop();//removes last item

console.log(lastItem, arr2);//11, [ -5, 16, 33, 42, 103, 344]

arr2.unshift(22);//adds item to the front

console.log(arr2);//[22, -5, 16, 33, 42, 103, 344]

let firstItem = arr2.shift();//removes first item
console.log(firstItem, arr2);//22, [-5, 16, 33, 42, 103, 344]

let reversed = arr2.reverse();//creates a new array in reverse order 
console.log(reversed);//[344, 103, 42, 33, 16, -5]
console.log(arr2.join('-'));//"-5-103-16-33-344-42" joins array with provided separator


//Task 5.2
let arr3 = [12, 33, 4, 5, -4, 8, 19, 25];
                
//map() creates a new array from the elements of one without changing the old one
function double(num){
  return num * 2;
}

let doubledArr = arr3.map(double); 
console.log(doubledArr);

function isOdd(num){
  return element%2 != 0; 
}
//Filter takes a test condition and returns only the element which 
//make the condition true
let odds = arr3.filter(isOdd);
console.log(odds);

//Returns true or false if any of the elements of the array 
//meets a specified condition
function has5Factor(){
  return ele % 5 === 0;
}

let hasFiveFactor = arr3.some(has5Factor);
console.log(hasFiveFactor);

function intCompare(a, b){
 return a - b;
}

//sort function must return either 0, +ve, -ve
let ascending = arr3.sort(intCompare)
console.log(ascending);


//Task 6
//Create a constructor a functions which builds object for us
function createPerson(name, height, weight) {
  return { name: name, height: height, weight: weight };
}

function calcBMI(weight, height) {
  return weight / (height * height);
}

function avgBMI(people) {
  let sum = 0;
  for (let person of people) {
    //sum the bmi of each person
    sum += calcBMI(person.weight, person.height);
  }
  //calculate average
  return sum / people.length;
}

//create a collection of people
let people = [
  createPerson("Sally", 60, 2.5),
  createPerson("Ben", 81, 3),
  createPerson("Shelly", 50, 1.7)
];

// console.log(avgBMI(people));

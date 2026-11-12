let a = 20;
let b = 10;
console.log(a += b);
console.log(a -= b);
console.log(a *= b);
console.log(a /= b);
console.log(a **= b);
console.log(a %= b);  //1

console.log(25 > 15);  //2

console.log(50 == "50");
console.log(50 === "50");  //3

console.log(100 != 200);
console.log(100 !== 200);  //4

let personAge = 24;
console.log(personAge >= 18);  //5

console.log(20 > 10 && 30 < 50);   //6

console.log(10 > 20 || 50 > 30);  //7

console.log(!(100 > 50));  //8

let Age = 24;
let salary = 20000;
let experience = 1;

let result = Age >= 18 && salary >= 25000 && experience <= 1;

console.log(result);    //9

let age = 24;
let onJob = true;
let salaryCredited = false;

console.log(age >= 18 && onJob || !salaryCredited);   //10

let num = -29;
console.log(num >= 0 ? "Positive" : "Negative");   //11 

let isLoggedIn = true;
console.log(isLoggedIn ? "Welcome" : "Please Login");   //12

let firstName = "Nelson";
let lastName = "alex";
console.log(firstName + " " + lastName);   //13 

let Name = "Nelson alex";
let Ages = 24;
let city = "Kallakurichi";
console.log(`My Name is ${Name}. I am ${Ages} old now . And I'm from ${city} `);   //14

console.log(typeof ("JavaScript" + 100));  //15

console.log(typeof (100 + true));  //16

console.log(Number("250") + 50);  //17

console.log(Number("123"));
console.log(Number("abc"));
console.log(Number(true));
console.log(Number(false));
console.log(Number(null));   //18

console.log(Boolean("Hello"));
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(undefined));
console.log(Boolean(null));   //19

let price = "500";
console.log(Number(price) + 100);  //20
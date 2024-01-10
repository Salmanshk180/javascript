// fibonacci number

function fibonacci(number) {
  let arr = [0, 1];
  for (i = 2; i < number; i++) {
    if (arr[arr.length-1] > number) {
      return arr;
    } else {
      let num = arr[i - 1] + arr[i - 2];
      if(num<number) {
          arr.push(num);
      }
    }
  }
  return arr;
}

console.log(fibonacci(10));

// user password validation

function passwordValidation(password) {
  let text = "";

  if (password.length < 6 || password.length > 14) {
    return (text = "password should not greater than 14 and less than 6");
  } else if (password[0] !== password[0].toUpperCase()) {
    return (text = "the first letter of password should be capital");
  } else {
    return (text = "passoword is valid");
  }
}

console.log(passwordValidation("Test@0"));

// closure

 const closure = function (value) {
   return {
    increment :  {value: value + 1} ,
    fetch :  {value: value},
   }
 };
 
console.log(closure(5).increment);
console.log(closure(5).fetch);
 


// sorted array

const data = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 },
];

function sortArray(arr){
    return arr.sort((a,b) =>a.age - b.age);
}

console.log(sortArray(data));
// chunk array

function chunkArray(array, size) {
  let a = [];
  let b =[];
  for(let i =0;i<array.length;i++){
     a.push([array[i],array[i+1],array[i+2]])
    i= i+2;
  }
  return a;
}

console.log(chunkArray([1,2,3,4,5,6,7,8,9],3));

// find max number

let ar = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];
let b = [];
let singleArray = function (array) {
  for (let index = 0; index < array.length; index++) {
    if (Array.isArray(array[index])) {
      let flat = array[index].flat();
      singleArray(flat);
    } else {
      b.push(array[index]);
    }
  }
  return b.sort();
};
console.log(singleArray(ar));
console.log(typeof(b[1]));
let maxNumber = b[0]
for (let i = 0; i <b.length; i++){
    if(b[i]>maxNumber){
        maxNumber = b[i];
    }
}
const max = Math.max(maxNumber);
console.log(max);

// employee
let employees = [];
employees.push({
  firstname: "virat",
  lastname: "kohli",
  mobilenumber: 1234567890,
  email: "virat@gmail.com",
  salary: 50000,
  address: [{ area: "p", pincode: 394210, city: "delhi", state: "delhi" }],
});
employees.push({
    firstname: "rohit",
    lastname: "sharma",
    mobilenumber: 1234567890,
    email: "rohit@gmail.com",
    salary: 50000,
    address: [{ area: "p", pincode: 394210, city: "delhi", state: "delhi" }],
  });

employees[0].firstname="sachin";
console.log(employees);
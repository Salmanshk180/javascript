// //<----------Hoisting----------->

// var a="hello"
// function b(){
//     var c = "hii";
//     console.log(this);
//     console.log(a)
// }
// console.log(this);
// console.log(c);
// b();

// //<----------Call Stack----------->
// function display() {
//     // display();
// }

// display();

// //<----------Chain Scope----------->

// function ab() {
//     function b() {
//         console.log(myVar);
//     }
//     // var myVar = 2;
//     b();
// }

// var myVar =1;
// ab();

// //<------------Synchronous----------->

// function someLongRunningFunction() {
//     let start = Date.now();
//     while (Date.now() - start < 5000) {
//         // do nothing
//     }
//     return "Hello";
// }

// console.log('Starting...');

// let result = someLongRunningFunction();
// console.log(result);

// console.log('...Finishing');

// // <-------------------Asynchronous------------->
// console.log("Start of script");

// setTimeout(function() {
//   console.log("First timeout completed");
// }, 5000);

// console.log("End of script")

// //<----------------Callback--------------------->
// function fetchData(callback) {
//     setTimeout(() => {
//       const data = {name: "John", age: 30};
//       callback(data);
//     }, 3000);
//   }

//   // Execute function with a callback
//   fetchData(function(data) {
//     console.log(data);
//   });

//   console.log("Data is being fetched...");

// //<---------------Coecion--------------->
// console.log(typeof(3+'2')); //String
// console.log(typeof(3-'2')); //Number

// //<-----------default value------------>

// function greet(msg="hello") {
//     console.log(msg);
// }

// greet("hii");
// console.log(greet);

// //<---------- Object ----------->

// var person = new Object();
// person["firstName"] = "Tony";
// person["lastName"] = "Alicea";
// person.address = new Object();
// person.address.city = "San Francisco";
// person.address.state = "USA";
// var person2 = person;
// person2.lastName ="Jones"
// var person3 = {firstName:"John", lastName:"Doe"};
// var person4 = Object.create(person3)
// person4.name="james"
// console.log(person);
// console.log(person['firstName']);
// console.log(person.lastName);
// console.log(person['address']['city']);
// console.log(person.address.state);
// console.log(person2);
// console.log(person3);
// console.log(person4);

// class Vehicle {
//     constructor(name, maker, engine) {
//       this.name = name;
//       this.maker =  maker;
//       this.engine = engine;
//     }
//   }

//   let car1 = new Vehicle('GT', 'BMW', '1998cc');

//   console.log(car1.name);  //GT

// //<-------- NameSpace ------->

// var greet = "hello";
// var greet = "hola";

// var english = {}
// var spanish = {}
// // english.greetings.greet =" hello";// error
// spanish.greet = "hola";

// console.log(english);
// console.log(spanish);

// //<-------- JSON -------->
// const JSONObject ='{"name":"John",  "age":30, "city":"New York"}';
// const JSONParse = JSON.parse(JSONObject);
// console.log(JSONParse);
// console.log(JSON.stringify(JSONParse));

// //<------ Anonymous function ------------->

// // greet();//error
// var greet = function(){
//     console.log("hello");
// }

// //<-------- By Value ----------->

// var a = 3;
// var b;
// b=a;
// a=4;
// console.log(a);
// console.log(b);

// //<--------- By Reference ----------->

// var c = {greet : "hello"};
// var d;
// d=c;
// c.greet = "hola";
// console.log(c);
// console.log(d);

// // <------------- This & Self Keyword ------------>

// function ac() {
//     console.log(this);
//     this.newvariable = 'hello';
// }

// var b = function() {
//     console.log(this);
// }

// ac();

// console.log(newvariable); // not good!

// b();

// var c = {
//     name: 'The c object',
//     log: function() {
//         var self = this;

//         self.name = 'Updated c object';
//         console.log(self);

//         var setname = function(newname) {
//             self.name = newname;
//         }
//         setname('Updated again! The c object');
//         console.log(self);
//     }
// }

// c.log();

// // <----------- Arguments ------------->

// function greet(firstname,lastname,language,...others){
//         console.log(firstname);
//         console.log(lastname);
//         console.log(language);
//         console.log(arguments[0]);
//         console.log(others);
//         console.log("------------");
// }
// greet();
// greet('John');
// greet('John',"Doe");
// greet("John","Doe","En")
// greet("John","Doe","En","NY","USA")

// //<---------- Function Overloading ----------->

// function greet(firstname,lastname,language){
//     if(language=='en'){
//     console.log("hello",firstname,lastname);
//     }
//     if(language == 'es'){
//         console.log("hola",firstname,lastname);
//     }
// }

// function greetEnglish(firstname,lastname){
//     greet(firstname,lastname,'en')  // function overloading
// }

// function greetSpanish(firstname,lastname){
//     greet(firstname,lastname,'es') // function overloading
// }

// greetEnglish('John',"Doe")
// greetSpanish('John',"Doe")

// //<---------- Automatic Semicolon ---------------->

// function greet(){
//     return
//     {
//         firstname : 'John'
//     }
// }
// function greetings(){
//     return {
//         firstname: 'John',
//     }
// }
// console.log(greet());
// console.log(greetings());

// // <---------- Immediately Invoked Function Expression (IIFE)-------------->

// var greet = function(name){
//     console.log("Hello " + name);
// }
// greet('John')

// var greetings = function(name){  // IIFE
//     console.log("Hola " + name);
// }('John')

// (function(name){
//     var greetings = 'Hello';
//     console.log(greetings +' '+ name);
// }('John'))

// console.log(greetings);

// // <------------- Closure -------------->

// function greet(whattosay){
//     return function(name){
//         console.log(whattosay+' '+name);
//     }
// }

// var sayhi = greet('hii');
// sayhi('Tony')

// // <-------------- function Factories --------------->

// function makegreetings(language){
//     return function(firstname,lastname){
//         if(language==='en'){
//             console.log('Hello'+' '+firstname+' '+lastname);
//         }
//         if(language==="es"){
//             console.log('Hola'+' '+firstname+' '+lastname);
//         }
//     }
// }

// var greetEnglish = makegreetings('en');
// var greetSpanish = makegreetings('es');

// greetEnglish('John','Doe');
// greetSpanish('John','Doe');

// // <------------- Callbacks -------------------->

// function makeGreetings(){
//     setTimeout(function(){  //callback function
//         console.log("hii");
//     },3000)
// }

// makeGreetings();

// //  <----------- Bind,Call,Apply ------------->

// var person = {
//     firstname : "John",
//     lastname : "Doe",
//     getfullname : function(){
//         var fullName = this.firstname + " " + this.lastname;
//         return fullName;
//     }
// }

// var logName = function(lang1, lang2){
//     console.log('Logged '+ this.getfullname());
//     console.log('Arguments:'+lang1+' '+lang2);
// }

// var logPersonName = logName.bind(person);
// logPersonName('en','es');
// logName.call(person,'en','es');
// logName.apply(person,['en','es']);

// var person2 ={
//     firstname: 'Jane',
//     lastname: 'Doe',
// }

// var name = person.getfullname.apply(person2) // funtion borrowing
// console.log(name);

// function multiply(a,b) {
//     return a * b;
// }

// var multiplyByTwo = multiply.bind(this,2); // function currying
// console.log(multiplyByTwo(4));

// // <---------- Functional Programming ----------->

// var arr1 = [1,2,3];
// function mapForEach(arr,fn) {
//     var arr2  =[];
//     for(var i=0; i<arr.length; i++){
//          arr2.push(
//              fn(arr[i])
//         )
//     };
//     return arr2;

// }

// var multiplyByTwo = mapForEach(arr1,function(item){
//     return item*2;
// });

// console.log(multiplyByTwo);

// var arr5 = _.map(arr1,function(item){return item*5})
// console.log(arr5);

// // <------------ Inheritance --------------->

//one object gets access to the properties and methods of another object

// #Prototypal inheritance

//  var person = {
//     firstname : "Default",
//     lastname : "Default",
//     getFullName : function(){
//         return this.firstname+" "+this.lastname;
//     }
//  }

//  var john = {
//     firstname : "John",
//     lastname : "Doe",
//  }
//  var jane = {
//     firstname : "Jane",
//  }

//  john.__proto__ = person;
//  jane.__proto__ = person;
//  console.log(john.getFullName());
//  console.log(jane.getFullName());

// // <------------- Reflection ----------------->

// var person = {
//   firstname: "Default",
//   lastname: "Default",
//   getFullName: function () {
//     return this.firstname + " " + this.lastname;
//   },
// };
// var john = {
//   firstname: "John",
//   lastname: "Doe",
// };

// john.__proto__ = person;

// for (var prop in john) {
//   if (john.hasOwnProperty(prop)) {
//     console.log(prop + ":" + john[prop]);
//   }
// }

// var jane = {
//     address: "111 Main St",
//     getFullName: function(){
//         return this.firstname + " " + this.lastname;
//     }
// }

// _.extend(john,jane);
// console.log(john);

// // <---------------- Function Constructor ---------------->

// A normal function used to construct object

// function Person(firstname, lastname) {
//     console.log(this);
//     this.firstname = firstname;
//     this.lastname = lastname;
//     return this.firstname + " " + this.lastname
// }

// var john = new Person('john','doe');
// console.log(john);

// // <-------- Built in function constructor ---------->

// String.prototype.isLengthGreaterThan = function(limit){
//     return this.length > limit
// }
// console.log('john'.isLengthGreaterThan(3));

// // Object.create and pure prototypal inheritance ---------------->

// var person = {
//   firstname: "John",
//   lastname: "Doe",
//   greet: function () {
//     return "Hi"+" "+this.firstname;
//   },
// };

// var john = Object.create(person); //Object is empty, check [[prototype]]
// console.log(john);

// Pollyfill : code that adds a feature which the engine may lack.

// // <-----------------Array and for in  ------------>

// Array.prototype.myCustomFeature = "cool";
// var arr1 = [1,2,3,4]
// console.log(arr1.__proto__);

// // <---------------- Class --------------------->

// class Person {
//     constructor(firstname,lastname){
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     greet(){
//         return 'hi'+firstname
//     }
// }

// var john = new Person('john','doe');
// console.log(john);
// // classical inheritance

// class InformalPerson extends Person {
//     constructor(firstname,lastname){
//         super(firstname,lastname);
//     }
//     greet(){
//         return 'Yo'+ firstname;
// }
// }
// var jane = new InformalPerson('jane','doe');

// console.log(jane);
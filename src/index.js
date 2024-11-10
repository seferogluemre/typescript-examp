// Example 1 ------------------
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
// const firstName="Emre";
// const favoritedNumber=12;
// Fonksiyonun parametresinin type=string
// function printName(name:string){
//     console.log(name);
// }
// Eger Burda number degişkenini gönderseydik ben senden string parametre bekliyordum sen bana number verdin diye hata patlatabilir
// printName(firstName);
// Example 2 --------------------
// let firstName ="Emre";
// let number=16;
// let isStudent=true;
// // firstName=14;
// firstName="Sipahi Hoca(:";
// // number="12" > 12;
// const favoritedNumberMessage=number+" :";
// console.log(favoritedNumberMessage)
// const square=(num: number)=>{
//     return num*5;
// }
// console.log(square("Emre"))
// console.log(square(12));
// console.log(square(4.67))
// Example 3 ------------------- Arrays
var names = ["Vickie", "Lena", "Abigail", "Bobbie"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
names.push("Hildred");
var namesAndNumbers = __spreadArray(
  __spreadArray([], names, true),
  numbers,
  true
);
console.log(namesAndNumbers);
var renameName = "Emre";
namesAndNumbers[2] = renameName;
console.log("İsim Degiştirildi", namesAndNumbers);
// Example 4 ---------------- Object
var user = {
  firstName: "Emre",
  lastName: "Seferoğlu",
  age: 16,
  birthDate: new Date(2008, 3, 22),
};
console.log(user.birthDate);
user.firstName = "Ahmet";
// user.firstName=1;!!!
user.birthDate = new Date(2008, 2, 4);
console.log(user.birthDate);
user = {
  lastName: "Seferoğlu",
  age: 16,
  birthDate: new Date(2008, 3, 22),
  firstName: "Ahmet",
};
// Example 5 ---------------- Explicit Types
var firstName;
var age;
var isBanned;
// age="emre";
age = 12;
// age=true;
// isBanned="aktif";
isBanned = true;
firstName = "emre";
// firstName=12;
var users = [];
// users.push(12);
users.push("emre");
var usersAndNumbers = [];
usersAndNumbers.push("Ahmet");
usersAndNumbers.push(1);
// usersAndNumbers.push(true);
var userOrNumbers;
userOrNumbers = "Emre";
userOrNumbers = 12;
// userOrNumbers=true;
var UserOne;
UserOne = { firstName: "Emre", age: 12, email: "ynsemr53@gmail.com" };
// UserOne=["emre"]; =>> sakıncalı durum object ile tanımladıgımızda array bile tanımlanabilir
var User2;
console.log(User2);
User2 = {
  firstName: "Emre",
  lastName: "Seferoglu",
  // address:"RİZE",
  birthDate: new Date(2008, 3, 22),
  age: 16,
  isBanned: true,
};
// Any ---------------------------
var name;
name = "Emre";
name = true;
name = 16;
name = ["Emre", "Ahmet", "Mehmet"];
var mixed = [];
mixed.push("Mehmet");
mixed.push(12);
mixed.push(true);
// let anyUser:{name:any,age:any,isloggedIn:any};
// anyUser={name:"Emre",age:25,isLoggedIn:false};
// anyUser={name:"Ahmet",age:16,isLoggedIn:"Hayır"};
// Functions ---------------------------------
var greet = function () {
  console.log("Sitemize hoşgeldiniz");
};
// greet="Merhaba" !!!!!!
// greet=()=>{
//     console.log("Selam Hoşgeldin");
// }
// const sum=(num1:number,num2:number,param3:number|string="Unfedined User")=>{
//     console.log(num1+num2);
//     if(param3){
//         console.log(param3);
//     }
// }
// sum(10,2);
// sum(12,5,12);
var sum = function (num1, num2) {
  return num1 + num2;
};
var result = sum(12, 5);
var showUserInfo = function (id, userName) {
  console.log(
    ""
      .concat(userName, " kullan\u0131c\u0131s\u0131n\u0131n Id'si \u015Fudur ")
      .concat(id)
  );
};
var sendWelcmMessage = function (user) {
  console.log(
    "Ho\u015Fgeldin ".concat(user.firstName, " ").concat(user.lastName, "!")
  );
};
var sendGoodBye = function (user) {
  console.log("Tekrar bekleriz,".concat(firstName));
};

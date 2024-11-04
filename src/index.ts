// Example 1 ------------------

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
// // console.log(square("Emre"))
// console.log(square(12));
// console.log(square(4.67))


// Example 3 ------------------- Arrays
const names=["Vickie","Lena","Abigail","Bobbie"];
const numbers=[1,2,3,4,5,6,7,8,9,10];
names.push("Hildred");

const namesAndNumbers=[...names,...numbers];
console.log(namesAndNumbers)
const renameName="Emre";

namesAndNumbers[2]=renameName;
console.log("İsim Degiştirildi" ,namesAndNumbers)


// Example 4 ---------------- Object
let user={
    firstName:"Emre",
    lastName:"Seferoğlu",
    age:16,
    birthDate:new Date(2008,3,22),
}
console.log(user.birthDate);
user.firstName="Ahmet";
// user.firstName=1;!!! 
user.birthDate=new Date(2008,2,4);
console.log(user.birthDate);

user={
    lastName:"Seferoğlu",
    age:16,
    birthDate:new Date(2008,3,22),
    firstName:"Ahmet",
}
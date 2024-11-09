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


// Example 5 ---------------- Explicit Types
let firstName:string;
let age:number;
let isBanned:boolean;

// age="emre";
age=12;
// age=true;

// isBanned="aktif";
isBanned=true;

firstName= "emre";
// firstName=12;

let users:string []=[];
// users.push(12);
users.push("emre");

let usersAndNumbers: (string | number)[]=[];
usersAndNumbers.push("Ahmet");
usersAndNumbers.push(1);
// usersAndNumbers.push(true);

let userOrNumbers:string | number;
userOrNumbers="Emre";
userOrNumbers=12;
// userOrNumbers=true;


let UserOne:object;
UserOne={firstName:"Emre",age:12,email:"ynsemr53@gmail.com"};
// UserOne=["emre"]; =>> sakıncalı durum object ile tanımladıgımızda array bile tanımlanabilir 


let User2:{
    firstName:string,
    lastName:string,
    birthDate:Date,
    age:number,
    // address?:string,Kullanıcı Adresi girmediginde artık hata vermiyor çünkü ? ile boşda olabilir doluda olabilir demiş olduk
    isBanned:boolean,
}

console.log(User2)

User2={
    firstName:"Emre",
    lastName:"Seferoglu",
    // address:"RİZE",
    birthDate:new Date(2008,3,22),
    age:16,
    isBanned:true,
}

// Any ---------------------------

let name:any;

name="Emre";
name=true;
name=16;
name=["Emre","Ahmet","Mehmet"];

let mixed: any[]=[];
mixed.push("Mehmet");
mixed.push(12);
mixed.push(true)

// let anyUser:{name:any,age:any,isloggedIn:any};
// anyUser={name:"Emre",age:25,isLoggedIn:false};
// anyUser={name:"Ahmet",age:16,isLoggedIn:"Hayır"};



// Functions ---------------------------------

let greet=()=>{
    console.log("Sitemize hoşgeldiniz")
}
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



const sum=(num1:number,num2:number):number=>{
    return num1+num2
}

let result=sum(12,5);


















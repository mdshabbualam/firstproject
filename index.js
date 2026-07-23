// // how to create Object;
// let car= {

//     model: 'thar',
//     year: '2000',
//     color: 'dark black'
// }
// console.log(car)
// console.log(car.model)
// console.log(car.color)

// let a=6;
//     b=6;
//     c=a+b;
//     console.log(c);
// //  how to creat Array
//     let names=[ 'apple','watermelone','papaya','banana']
//     console.log(names);
//     console.log(names[0,1,2,3])
//     console.log(names[2]);
//     console.log(names[1]);
//     names[2]='guava';
//     console.log(names);
//     names[2]='grapes';
//     console.log(names);
//     console.log(names[2]);
//     names[4]='pinapple';
//     console.log(names);

function add(){
    let a= parseInt(document.getElementById("num1").value);
     let b= parseInt(document.getElementById("num2").value);
     let sum= a+b;
     document.getElementById("data").innerHTML=sum;
}
function sub(){
    let a= parseInt(document.getElementById("num1").value);
     let b= parseInt(document.getElementById("num2").value);
     let sum= a-b;
     document.getElementById("data").innerHTML=sum;
}
function mul(){
    let a= parseInt(document.getElementById("num1").value);
     let b= parseInt(document.getElementById("num2").value);
     let mul= a*b;
     document.getElementById("data").innerHTML=mul;
}
function divide(){
    let a= parseInt(document.getElementById("num1").value);
     let b= parseInt(document.getElementById("num2").value);
     let divide= a/b;
     document.getElementById("data").innerHTML=divide;
}
   
let nine = 9;
console.log(nine)





// let age=18;
// if(age>=20){
// console.log('you are eligible for vote');
// }else{
// console.log('you are not eligible for vote');
// }

// let number=10;
// if(number %2 ==0){
// console.log('even number');
// }else{
// console.log('odd number');
// }

// let num= -10;
// if(num >=0){
// console.log('positive number');
// }else{
// console.log('negative number');
// }
// let marks= 55;
// if(marks >=55){
// console.log('You are eleigible for mains exam');
// }else{
// console.log('You are not eleigible for mains exam');
// }

// let age=20;
// if(age >=20){
//     console.log('you are aleigible');
// }

// else{
//     console. log('you are not aleigible');
// }

//  let age=18;
//  if{
//     console.log{}
//  }
//  else(age <=18){
//     console.log{'you are not aleigble' }
//  }

//  let num = Number(prompt("Enter any number:"));
//  if(num %2==0){
// console.log('Even number');
//  }
//  else{
//     console.log('Odd Number');
//  }

//  let num = Number(prompt("Enter any number:"));
//  if(num >=90){
//     console.log('first devision');
//  }
//  else if(num >=70){
//     console.log('seconde devision');
//  }
//   else if (num >=50){
//     console.log('third devision');
//   }
//   else{
//     console.log('faild');
//   }

// let score = Number(prompt("Enter your test (0-100):"));
// if (score >=90){
//   console.log("Grade:A");
// }
// else if(score >=70){
  
// }

function checkevenorodd()
{
   let number=Number(document.getElementById("number1").value);
    if(number %2==0){
      document.getElementById("answer1").innerHTML="even number";
    }
    else{
      document.getElementById("answer1").innerHTML="odd";
    }
}
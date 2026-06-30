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
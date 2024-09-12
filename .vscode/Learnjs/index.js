// swap number

// let a=2;
// let b=3;
// let c=0;
// c=a;
// a=b;
// b=c;
// console.log(a);
// console.log(b);




//Prompt

// let a = Number(prompt("Enter the First Number"));
// let b = Number(prompt("Enter the second Number"));

// let sum ;
// sum = a+b;
// console.log(sum);



// Even odd number printing

// let a = Number(prompt("Enter the First Number"));

// if(a%2==0){
//     console.log(a, "Yes it is Even number");
// }
// else{
//     console.log(a, "It is Odd number");
// }




// Percentage Calculation

// let per = Number(prompt("Enter your percentage :-"));


// if(per>=90){
//     console.log("You got AA");
// }
// else if(per>=80 && per<90){
//     console.log("You got AB");
// }
// else if(per>=70 && per<80){
//     console.log("You got BB"); 
// }
// else if(per>=60 && per<70){
//     console.log("You got BC"); 
// }
// else if(per>=50 && per<60){
//     console.log("You got CC"); 
// }
// else if(per>=40 && per<50){
//     console.log("You got CD "); 
// }
// else if(per>=30 && per<40){
//     console.log("You got DD");
// }
// else{
//     console.log("You got FF");
// }



//Find the avge grade perecentage of the student

// let a = Number( prompt("Enter the first Subject marks:-"));
// let b = Number( prompt("Enter the first Subject marks:-"));
// let c = Number( prompt("Enter the first Subject marks:-"));

// let avg;
// avg = a+b+c;
// avg=avg/3;



//eligible=18 to 50 ticket 20 ruppe and less than 18 are not eligible . After the age 50 user have free entry and ask they should have buy camera on rent at 10 ruppee

// let age = Number( prompt("Enter Your Age :-"));
// let ticket=20;
// camera=10;

//  if (age>=18 && age<50){
//    let b= prompt("Do you want camera on rent . Press 1 for yes and zero for no ?")
//     if(b==1){
//         let total;
//         total=ticket+camera;
//         console.log("Your total payment =" ,total);
//     }else{
//         console.log("Your total payment =" ,ticket);
//     }   
// }
// else if (age>=50){
//     let c= prompt("Do you want camera on rent . Press 1 for yes and zero for no ?")
//     if (c==1){
//         console.log("Your total payment =" ,camera);
//     }
//     else{
//         console.log("Youe Entry is free")
//     }
// }
// else if(age<18){
//     console.log("You are not Eligible");
// }



// Math Method

// let a = Math.round(5.6);
// console.log(a);

// let b = Math.ceil(4.5);
// console.log(b);

// let c= Math.floor(4.4);
// console.log(c);

// let d= Math.trunc(4,8);
// console.log(d);


// Example for generate the random numbers

// let random = parseInt((Math.random()*6)+1);
// console.log(random);


// check and print the number is even or odd

// for(let i=1 ; i<=10 ; i++){
//     if(i%2==0){
//         console.log(`${i} is a Even`);
//     }
//     else{
//         console.log(`${i} is a Odd`);
//     }

// }



// 

// let str="";
// for(let i=9; i>=0; i--)
// {
//    str= str + i.toString();      //to string are used to convert the other type of data into string
   
// }
// console.log(str);



// if no divide by 3 then print fizz if no. is divide by 5 thenprint buzz and no is divided by by both 3 and 5 the prnt fizzbuz

// let i=1;
// while(i<=50){

//     if(i%3==0 && i%5==0){
//         console.log("FizzBuzz");
//     }
//     else if(i%3==0){
//         console.log("Fizz");
//     }
//     else if(i%5==0) {
//         console.log("Buzz");
//     }
//     else{
//         console.log(i);
//     }

//     i++;
// }



// let i=true;
// console.log(!i);      // This is a technique to declare a variable to be false


//  For of loops :- these loops provide the facilities that does not need any iteration for the execution

// let arr=["a","b","c","d","e"]

// for(i of arr){       // In this i used as a virtual variable that helps to store the data
//     console.log(i);
// }




// Print the no in the numbers of times

// for(let i=1;i<=3;i++)
// {
//     for(let j=1; j<=i;j++){
//     console.log(i);
//   }
// }
// const list = [1, 3, "indore",true]
// console.log(list);
// console.log(list[2]);
// console.log(list[3]);



// Print the array elements using for loop

// const arr = [1,2,3,4,5,"Nanpur","Indore", true, "Dewas"] 
// for(i=0;i<arr.length;i++)
// {
//     console.log(arr[i]);
// }
// document.getElementById("new").innerHTML = "*"




// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

// for(let i=1;i<=5;i++){
//     for(let j=1;j<=5;j++)
//     {
//      document.getElementById("new").innerHTML += "*"
//     }
//     document.getElementById("new").innerHTML += "<br>"
// }


// *
// **
// ***
// ****
// *****

// for(let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++)
//     {
//      document.getElementById("new").innerHTML += "*"
//     }
//     document.getElementById("new").innerHTML += "<br>"
// }


// *****
// ****
// ***
// **
// *

// for(let i=1;i<=5;i++){
//     for(let j=5;j>=i;j--)
//     {
//      document.getElementById("new").innerHTML += "*"
//     }
//     document.getElementById("new").innerHTML += "<br>"
// }



// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// for(let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++)
//     {
//      document.getElementById("new").innerHTML += j
//     }
//     document.getElementById("new").innerHTML += "<br>"
// }





                                              // for in and for of loops

// for in loop basically gives the index. It can work on iterterable items such as string array object . It create a new array so there is no changes occur in the original array
// for of loop basically gives the values. It can work on iterterable items such as string array object . It create a new array so there is no changes occur in the original array



// let name = "Ram Sharma..."
// for(let text in name) {
//     console.log(text);
// }
// const arr = [1,2,3,4,5,"Nanpur","Indore", true, "Dewas"]
// for (let x in arr) {
//     console.log(x);
// } 
// console.log(arr.length);

// let name = "Ram Sharma..."
// for(let text of name) {
//     console.log(text);
// }
// const arr = [1,2,3,4,5]
// for (let x of arr) {
//     console.log(x * 10);
// } 
// console.log(arr);


//  Print of factorial of the number

let a = prompt("Enter the Number");
let fact=1;
for(let i=1;i<=a;i++)
{
    fact=fact*i;
}
document.getElementById("new").innerHTML = `Factorial of the number is ${fact}`


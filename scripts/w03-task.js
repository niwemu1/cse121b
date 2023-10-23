/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add(number1,number2){
     return number1 + number2;
    }
function addNumbers(){
     addend1 = document.getElementById('add1').value;
     addend2 = document.getElementById('add2').value;
     addend = add(addend1,addend2)
     return document.getElementById('sum').value = addend;
    }   
    document.getElementById('addNumbers').addEventListener('click', addNumbers);   

/* Function Expression - Subtract Numbers */
function substract(number1,number2){
    return number1-number2;
}
function subtractNumbers(){
    minuend=document.getElementById('subtract1').value;
    subtrahend=document.getElementById('subtract2').value;
    diff= substract(minuend,subtrahend);
    return document.getElementById('difference').value = diff;
   }   
   document.getElementById('subtractNumbers').addEventListener('click',subtractNumbers);   

/* Arrow Function - Multiply Numbers */
function multiply(number1,number2){
    return number1*number2;
}
function multiplyNumbers(){
    factor1=document.getElementById('factor1').value;
    factor2=document.getElementById('factor2').value;
    mult = multiply(factor1,factor2);
    return document.getElementById('product').value= mult;
}
document.getElementById('multiplyNumbers').addEventListener('click',multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide(number1,number2){
    return number1/number2;
}
function divideNumbers(dividend,divisor){
    dividend=document.getElementById('dividend').value;
    divisor=document.getElementById('divisor').value;
    quot= divide(dividend,divisor);
    return document.getElementById('quotient').value= quot;

   } 
   document.getElementById('divideNumbers').addEventListener('click',divideNumbers);

/* Decision Structure */
const today = new Date();
console.log(today.toString());
var year= today.getFullYear();
console.log(year);
document.getElementById('year').innerHTML = year;

/* ARRAY METHODS - Functional Programming */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
/* Output Source Array */
document.getElementById('array').innerHTML= numbersArray;

/* Output Odds Only Array */
const oddNumbers = numbersArray.filter((number)=>{
    return number % 2 !== 0;
})
console.log(oddNumbers);
document.getElementById('odds').innerHTML = oddNumbers

/* Output Evens Only Array */
const even = numbersArray.filter((number)=>{
    return number % 2 === 0;
})
console.log(even);

document.getElementById('evens').innerHTML = even
    
/* Output Sum of Org. Array */
const result = numbersArray.reduce((sum,number)=>{
    return sum + number;
})
console.log(result);
document.getElementById('sumOfArray').innerHTML = result

/* Output Multiplied by 2 Array */
const map = numbersArray.map(x => x * 2);
    
    console.log(map);
    document.getElementById('multiplied').innerHTML = map ;

/* Output Sum of Multiplied by 2 Array */
const sum1 = map.reduce((sum,number)=>{
    return sum + number;
})

console.log(sum1);
document.getElementById('sumOfMultiplied').innerHTML = sum1;
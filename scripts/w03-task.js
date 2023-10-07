/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add(number1,number2){
    return number1+number2;
    }
    
    function addnumbers(){
     addend1=parseInt(document.getElementById('addend1').value);
     addend2=parseInt(document.getElementById('addend2').value);
     sum = add(addend1,addend2);
     
     document.getElementById('sum').value = sum;
    }

    const element = document.getElementById('addNumbers');
    element.addEventListener('click',addnumbers);

/* Function Expression - Subtract Numbers */
function substract(number1,number2){
    return number1-number2;
}
function subtractnumbers(){
    minuend=document.getElementById('minuend').value;
    subtrahend=document.getElementById('subtrahend').value;
    diff= substract(minuend,subtrahend);
    return document.getElementById('difference').value = diff;
   }   
   document.getElementById('subtractNumbers').addEventListener('click',subtractnumbers);   

/* Arrow Function - Multiply Numbers */
function multiply(number1,number2){
    return number1*number2;
}
function multiplynumbers(){
    factor1=document.getElementById('factor1').value;
    factor2=document.getElementById('factor2').value;
    mult = multiply(factor1,factor2);
    return document.getElementById('product').value= mult;
}
document.getElementById('multiplyNumbers').addEventListener('click',multiplynumbers);

/* Open Function Use - Divide Numbers */
function divide(number1,number2){
    return number1/number2;
}
function dividenumbers(dividend,divisor){
    dividend=document.getElementById('dividend').value;
    divisor=document.getElementById('divisor').value;
    quot= divide(dividend,divisor);
    return document.getElementById('quotient').value= quot;

   } 
   document.getElementById('divideNumbers').addEventListener('click',dividenumbers);

/* Decision Structure */
const today = new Date();
console.log(today.toString());
var year= today.getFullYear();
console.log(year);
document.getElementById('year').innerHTML = year;

/* ARRAY METHODS - Functional Programming */
const allNumbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

/* Output Source Array */
document.getElementById('array').innerHTML= allNumbers;

/* Output Odds Only Array */
const oddNumbers = allNumbers.filter((value)=>{
    return value % 2 !== 0;
})
console.log(oddNumbers);
document.getElementById('odds').innerHTML = oddNumbers

/* Output Evens Only Array */
const even = allNumbers.filter((value)=>{
    return value % 2 === 0;
})
console.log(even);

document.getElementById('evens').innerHTML = even
    
/* Output Sum of Org. Array */
const result = allNumbers.reduce((sum,value)=>{
    return sum + value;
})
console.log(result);
document.getElementById('sumOfArray').innerHTML = result

/* Output Multiplied by 2 Array */
const map = allNumbers.map(x => x * 2);
    
    console.log(map);
    document.getElementById('multiplied').innerHTML=map ;

/* Output Sum of Multiplied by 2 Array */
const sum1 = map.reduce((sum,value)=>{
    return sum + value;
})

console.log(sum1);
document.getElementById('sumOfMultiplied').innerHTML=sum1;
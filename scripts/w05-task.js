/* W05: Programming Tasks */

/* Declare and initialize global variables */
let  templesElement = new Date();
// Declare another variable to hold the day of the week
let week;
week = templesElement.getDay();

let message;

if (week >= 1 && week <= 5){
    message = 'hang in there';
}

else{
    message = 'Woohoo!  It is the weekend!';
    
}
/* SWITCH, CASE, BREAK */
let message2;

switch (week){
    case 1:
        message2 = 'Monday';
    break;
    
    case 2:
        message2 = 'Tuesday';
        
    break;   
    case 3:
        message2 = 'Wednesday';
        
    break;
    case 4:
        message2 = 'Thrusday';
        
    break;
    case 5:
        message2 = 'Friday';
        
    break;
    case 6:
        message2 = 'Satday';
    break;
    case 7:
        message2 = 'Sunday';
    break;
}


let templeList = [];

/* async displayTemples Function */

function output(templeList){

    templeList.array.forEach(element => {

const article = document.createElement('article');
const templeName = document.createElement('h3').textContent = templeList.templeName;
const location = document.createElement('h4').textContent = templeList.location;
const dedicated = document.createElement('h4').textContent = templeList.dedicated;
const image = document.createElement('img');
    image.setAttribute('src', templeList.imageUrl);
    

    article.appendChild(templeName);
    article.appendChild(location);
    article.appendChild(dedicated);
    article.appendChild(image);


let div = document.getElementById('temples');

    div.appendChild(article);

   });
};

/* async getTemples Function using fetch()*/


async function getTemples() {

    let response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
    let templeArray = await response.json();
    outputTemples(templeArray);
  
  };
  
  getTemples(temples);
    
/* reset Function */


function reset() {
    return document.getElementById('temples').innerHTML = '';
  };

/* sortBy Function */

  
  function sortBy() {
    
    reset();
  
    let d = document.getElementById('temples');
    let c = document.getElementById('temples');
    let s = document.getElementById('sortBy');
  
     if (d) {
      let sorted = temples.sort(function(a,b) {return a-b});
      return output(sorted);
  
    }else if (c) {
      let sorted = temples.sort(function(a,b) {return a-b});
      return output(sorted);
    };
    
  };

/* Event Listener */

document.getElementById('sortBy').addEventListener('change', sortBy);

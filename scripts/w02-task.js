

/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */
const fullName = 'Niwemugeni Deborah';

/* Step 2 - Variables */

const currentYear = new Date().getFullYear();

/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;

/* Step 5 - Array */

let foodArray = ['Lentis and Chapati','Banana Bread','Potatoes'];
foodArray.push('Chicken and Rice Casserole','Stir Fry Vegetables');
foodElement.textContent = foodArray;
foodElement.innerHTML += `<br>${foodArray}`;




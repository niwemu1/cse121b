/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: 'Niwemugeni Deborah',
    photo: 'images/Debby picture.png',
    favoriteFoods:['Lentis','Chapati','Banana Bread','Chicken and Rice', 'Potatoes'],
    hobbies: ['Reading', 'Singing', 'Listen to Music'],
    placesLived: [], 
};


/* Populate Profile Object with placesLive objects */
myProfile.placesLived.add = {
    Place :'Kenya',
    length : '1 Year',
};

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;


/* DOM Manipulation - Output */
/* Name */
document.querySelector('#name').textContent = myProfile.name;


/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
   let li = document.createElement('li');
   li.textContent = food;
   document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobbies => {
    let li = document.createElement('li');
    li.textContent = hobbies;
    document.querySelector('#hobbies').appendChild(li);
 });

/* Places Lived DataList */

 
myProfile.placesLived.forEach(place => {
    let td = document.createElement('td');
    td.textContent = place;
    document.querySelector('#places-lived').appendChild(td);
 });
        
 myProfile.placesLived.forEach(length => {
    let dd = document.createElement('dd');
    dd.textContent = length;
    document.querySelector('#places-lived').appendChild(dd);
 });







        


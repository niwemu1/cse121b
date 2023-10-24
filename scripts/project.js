const menu =[{
    id: 1,
    title: 'Soft Boiled Eggs',
    category: 'Breakfast',
    price: 3.5,
    img: 'images/soft-boiled-eggs-with-deviled-soldierssoft-boiled-eggs-with-deviled-soldiers-6400db067226a.jpg',
    desc: 'In this fun twist on traditional deviled eggs.', 
},
{
    id: 2,
    title: 'Spaghetti',
    category: 'Lunch',
    price: 7.7,
    img: 'images/spaghetti-meatballs_1339-2993.jpg',
    desc: 'This is spaghetti blongyise ', 
},
{
    id: 3,
    title: 'Carrot Juice',
    category: 'Drinks',
    price: 10,
    img: 'images/Carrot-Juice-001.webp',
    desc: 'Fresh Carrot Juice',
},

{
    id: 4,
    title: 'Beef',
    category: 'Lunch',
    price: 15,
    img: 'images/delicious-carrot-beef-brisket-casserole_1205-12295.jpg',
    desc: 'Beef dishes',
},
{
    id: 5,
    title: 'Fried egg',
    category: 'Breakfast',
    price: 5.9,
    img: 'images/1487797421-ghk040116ykbacon-fried-rice.jpg',
    desc: '2 Eggs and Butter',
},
{
    id: 6,
    title: 'Sandwich',
    category: 'Lunch',
    price: 9.13,
    img: 'images/big-sandwich-hamburger-burger-with-beef-red-onion-tomato-fried-bacon_2829-5398.jpg',
    desc: 'Sauage,2Eggs,Canadian Bacon.', 
},
{
    id: 7,
    title: 'Orang Juice',
    category: 'Drinks',
    price: 7.5,
    img: 'images/Fresh-Made-Orange-Juice.webp',
    desc: 'Fresh Orang Juice',
},
{
    id: 8,
    title: 'Watermelon Juice',
    category: 'Drinks',
    price: 6.2,
    img: 'images/watermelon-juice-1-580x757.jpg',
    desc: 'Fresh Watermelon Juice ',
},
{
    id: 9,
    title: 'Soup',
    category: 'Breakfast',
    price: 6,
    img: 'images/1000_F_113380165_2kPTzifB5QbOaAGrTRFIvvMCHUwpBqm4.jpg',
    desc: 'Mushroom Soup and 3 Bread',
},

];

const sectionCenter = document.querySelector('.section-center');
const container =document.querySelector('.button-container');

window.addEventListener('DOMContentLoaded', function() {
    displayMenuItems(menu);
    displayMenuButtons();
});

function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item) {

        return `<article class="menu-item">
        <img src=${item.img} class="photo" alt=${item.title} width="90" height="90" />
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
                ${item.desc}
            </p>
        </div>
    </article>`;
    
        });
        displayMenu = displayMenu.join('');
        sectionCenter.innerHTML = displayMenu

}

function displayMenuButtons(){
    const categories =menu.reduce(function(values,item){
        if (!values.includes(item.category)){
            values.push(item.category);
        }
       return values;
    
    },
    
    ['All']

    );
    const categoryBtns = categories.map(function (category){
        return `<button class="filter-button" type="button" data-id=${category}> ${category} </button>`;
    })
    .join('');
    container.innerHTML = categoryBtns;
    const filterBtns = document.querySelectorAll('.filter-button')

    filterBtns.forEach(function(btn){
        btn.addEventListener('click',function (e){
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuItem){
                if (menuItem.category === category){
                    return menuItem;
                }
            });
            if(category === 'All'){
               displayMenuItems(menu) 
            }
            else{
                displayMenuItems(menuCategory)
            }
        });
    
    });
}


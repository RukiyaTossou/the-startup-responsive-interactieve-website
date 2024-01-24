// quereySelectors
// filters
let filterButtons = document.querySelectorAll('.filters');
let allImages = document.querySelectorAll('.ul-images-people li');
let showAllFiltersButton = document.querySelector('.show-all-filters');
let shortHairButton = document.querySelector('.filters-all[data-filters="short-hair"]');
let FrontEndButton = document.querySelector('.filters-all[data-filters="Front-end"]');
let Logo = document.querySelectorAll('.shake');
let filter = 'all';

// menu
let menuButton = document.querySelector('.menu-button');
let menu = document.querySelector('.ul-navbar');
let menuButtonClose = document.querySelector('.colse-icon');

// event listeners
showAllFiltersButton.addEventListener('click', showAllFilters);
shortHairButton.addEventListener('click', showFilteredImages); 
// Logo.addEventListener('click', shake);
menuButton.addEventListener('click', menuToggle)

// menu toggle functie
function menuToggle(){
    if (menu.style.display === 'block'){
        console.log('Menu is currently visible. Hiding it.');
        menu.style.display = 'none';
    } else{
        console.log('Menu is currently hidden. Showing it.');
        menu.style.display = 'block';
    }
}

// logo shake
// function shake(){
//     Logo.classList.toggle('shake');

// }
// button filters toggle
function showAllFilters() { 
    filterButtons.forEach(button => {
        button.classList.toggle('show');
    });
}

function showOnlyShortHairImg(){
    filterButtons.forEach(button => {
        button.classList.toggle('show');
    });
    

}


filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        let filter = this.getAttribute('data-filters');
        showFilteredImages(filter);
    });
});

function showFilteredImages(filter) {
    allImages.forEach(imgItem => {
        let imgDataFilters = imgItem.getAttribute('data-filters');
        if (imgDataFilters === filter) {
            imgItem.classList.remove('hidden');
        } else {
            imgItem.classList.add('hidden');
        }
    });
}
   



// filterButtons.forEach(button => {
//     button.addEventListener('click', function() {
//         filter = this.getAttribute('data-filters');
//         showFilteredImages();
//     });
// });

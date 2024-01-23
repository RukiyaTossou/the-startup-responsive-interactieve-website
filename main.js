// quereySelectors
let filterButtons = document.querySelectorAll('.filters');
let allImages = document.querySelectorAll('.ul-images-people li');
let showAllFiltersButton = document.querySelector('.show-all-filters');
let shortHairButton = document.querySelector('.filters-all[data-filters="short-hair"]');
let FrontEndButton = document.querySelector('.filters-all[data-filters="Front-end"]');

let filter = 'all';

// event listeners
showAllFiltersButton.addEventListener('click', showAllFilters);

shortHairButton.addEventListener('click', showFilteredImages);  // Use the same function for both buttons

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

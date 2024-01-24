// quereySelectors
// filters
let filterButtons = document.querySelectorAll('.filters');
let allImages = document.querySelectorAll('.img-li');
let showAllFiltersButton = document.querySelector('.show-all-filters');
let shortHairButton = document.querySelector('.filters-all[data-filters="short-hair"]');
let FrontEndButton = document.querySelector('.filters-all[data-filters="Front-end"]');
let PartnerVanDeClubButton = document.querySelector('.filters-all[data-filters="Partner-van-de-club"]')
let IsStiekemEenDesignerButton = document.querySelector('.filters-all[data-filters="Is-stiekem-een-designer"]');
let HarryPotterfanButton = document.querySelector('.filters-all[data-filters="HarryPotterfan"]');
let teskst = document.querySelector('.Onze-mensen-tekst');
let Logo = document.querySelectorAll('.shake');


// menu
let menuButton = document.querySelector('.menu-button');
let menu = document.querySelector('.ul-navbar');
let menuButtonClose = document.querySelector('.colse-icon');


// event listeners
showAllFiltersButton.addEventListener('click', showAllFilters);
shortHairButton.addEventListener('click',showOnlyShortHairImg);
FrontEndButton.addEventListener('click',showOnlyFrontEndImg);
PartnerVanDeClubButton.addEventListener('click',showOnlyPartnerVanDeClubImg);
HarryPotterfanButton.addEventListener('click',showOnlyHarryPotterfanImg);
IsStiekemEenDesignerButton.addEventListener('click', showOnlyIsStiekemEenDesignerImg);

// Logo.addEventListener('click', shake);
menuButton.addEventListener('click', menuToggle)

function showOnlyShortHairImg(){
    // Loop through each element with class 'img-li'
    Array.from(allImages).forEach(imgItem => {
        // If the data-filters attribute is present and its value is not 'short-hair'
        if (imgItem.hasAttribute('data-filters') && imgItem.getAttribute('data-filters') !== 'short-hair') {
            // Voeg de 'hidden' klasse toe
            imgItem.classList.add('hidden');
        } else {
            // Als de 'hidden' klasse al is toegevoegd, verwijder deze
            imgItem.classList.remove('hidden');
        }
    });
}
function showOnlyPartnerVanDeClubImg(){
       // Loop through each element with class 'img-li'
    Array.from(allImages).forEach(imgItem => {
    // If the data-filters attribute is present and its value is not 'short-hair'
    if (imgItem.hasAttribute('data-filters') && imgItem.getAttribute('data-filters') !== 'Partner-van-de-club') {
        // Voeg de 'hidden' klasse toe
        imgItem.classList.add('hidden');
    } else {
        // Als de 'hidden' klasse al is toegevoegd, verwijder deze
        imgItem.classList.remove('hidden');
    }
});
}

function showOnlyHarryPotterfanImg(){
    // Loop through each element with class 'img-li'
    Array.from(allImages).forEach(imgItem => {
    // If the data-filters attribute is present and its value is not 'short-hair'
    if (imgItem.hasAttribute('data-filters') && imgItem.getAttribute('data-filters') !== 'HarryPotterfan') {
        // Voeg de 'hidden' klasse toe
        imgItem.classList.add('hidden');
    } else {
        // Als de 'hidden' klasse al is toegevoegd, verwijder deze
        imgItem.classList.remove('hidden');
    }
});
}


function showOnlyIsStiekemEenDesignerImg(){
    console.log('Toggle All Images function called');
  // Loop through each element with class 'img-li'
  Array.from(allImages).forEach(imgItem => {
    // If the data-filters attribute is present and its value is not 'short-hair'
    if (imgItem.hasAttribute('data-filters') && imgItem.getAttribute('data-filters') !== 'Is-stiekem-een-designer') {
        // Voeg de 'hidden' klasse toe
        imgItem.classList.add('hidden');
    } else {
        // Als de 'hidden' klasse al is toegevoegd, verwijder deze
        imgItem.classList.remove('hidden');
    }
});
}

function showOnlyFrontEndImg(){
    console.log('Toggle All Images function called');
// Loop through each element with class 'img-li'
Array.from(allImages).forEach(imgItem => {
    // If the data-filters attribute is present and its value is not 'short-hair'
    if (imgItem.hasAttribute('data-filters') && imgItem.getAttribute('data-filters') !== 'Front-end') {
        // Voeg de 'hidden' klasse toe
        imgItem.classList.add('hidden');
    } else {
        // Als de 'hidden' klasse al is toegevoegd, verwijder deze
        imgItem.classList.remove('hidden');
    }
});
}


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
function showFilteredImages(filter) {
    allImages.forEach(imgItem => {
        let imgDataFilters = imgItem.getAttribute('data-filters');
        if (imgDataFilters === filter || filter === 'all') {
            imgItem.classList.remove('hidden');
        } else {
            imgItem.classList.add('hidden');
        }
    });
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

// function showOnlyShortHairImg(){
//     filterButtons.forEach(button => {
//         button.classList.toggle('show');
//     });
    

// }


// filterButtons.forEach(button => {
//     button.addEventListener('click', function() {
//         let filter = this.getAttribute('data-filters');
//         showFilteredImages(filter);
//     });
// });

// function showFilteredImages(filter) {
//     allImages.forEach(imgItem => {
//         let imgDataFilters = imgItem.getAttribute('data-filters');
//         if (imgDataFilters === filter) {
//             imgItem.classList.remove('hidden');
//         } else {
//             imgItem.classList.add('hidden');
//         }
//     });
// }
   



// filterButtons.forEach(button => {
//     button.addEventListener('click', function() {
//         filter = this.getAttribute('data-filters');
//         showFilteredImages();
//     });
// });

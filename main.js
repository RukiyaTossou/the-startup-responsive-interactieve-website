// quereySelectors
let filterButtons = document.querySelectorAll('.filters');
let allImages = document.querySelectorAll('.ul-images-people li');
let showAllFiltersButton = document.querySelector('.show-all-filters');
let shortHairButton = document.querySelector('.filters-all[data-filters="short-hair"]');
let FrontEndButton = document.querySelector('.filters-all[data-filters="Front-end"]');




// event listeners 
showAllFiltersButton.addEventListener('click', showAllFilters);
shortHairButton.addEventListener('click', showShortHairImages);


// button filters toggle
function showAllFilters() { 
    filterButtons.forEach(button => {
        button.classList.toggle('show');
    });
}

//short hair
function showShortHairImages() {
    let filter = 'short-hair';

    allImages.forEach(function (imgItem) {
        let imgDataFilters = imgItem.getAttribute('data-filters');
        console.log('Filter before toggle:', filter);
        console.log('Image Data Filters before toggle:', imgDataFilters);

        // Toggle de 'hidden' klasse op basis van of het filter overeenkomt met de data-filters waarde
        let shouldShowImage = imgDataFilters === filter;
        imgItem.classList.toggle('hidden', !shouldShowImage);

        console.log(`Image with data-filters='${imgDataFilters}' is visible: ${shouldShowImage}`);
    });

    // Plaats de console.log-verklaringen hier om toegang te hebben tot de variabele 'filter'
    console.log('Filter after toggle:', filter);
}

// Voeg event listener toe



// front-end

// function showFrontEndImages() {
//     // Definieer het filter dat overeenkomt met de knop "Short hair don't care"
//     let filter = 'front-end';

//     // Loop door alle afbeeldingen
//     allImages.forEach(function (imgItem) {
//         // Haal de waarde van het data-filters attribuut op voor elke afbeelding
//         let imgDataFilters = imgItem.getAttribute('data-filters');
        
//         // Toggle de 'hidden' klasse op basis van of het filter overeenkomt met de data-filters waarde
//         imgItem.classList.toggle('hidden', imgDataFilters !== filter);
//     });
// }

















// // QuerySelectors
// let showAllFiltersButton = document.querySelector('.show-all-filters');
// let allFilters = document.querySelectorAll('.filters-all');
// let allImages = document.getElementsByClassName('ul-images-people li');
// let clickedFilter = document.getElementsByClassName('data-filters');

// // Event listener
// showAllFiltersButton.addEventListener('click', showAllFilters);

// // Functie  show all filters
// function showAllFilters() {
//     console.log("triggered")
//     // Loop door elke filter button en toggle 
//     allFilters.forEach(filter => {
//         console.log("changed a filter")
//         filter.classList.toggle('hidden');
//     });
// }
// function showAllImages(){
//     // if data-filter with all name is clicked, show all images 
//     if (clickedFilter === 'all'){
//         // loop door alle img en haal hidden weg.
//         allImages.forEach(allImages =>{
//             allImages.classList.remove('hidden')
//         })
//     }

// function shortHair(){
//     if (clickedFilter === 'short-hair'{ 


//     })

// }
    
   


// }

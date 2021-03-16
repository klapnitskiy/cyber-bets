
if (window.screen.width <= 900) {
    const gamesContainer = document.querySelector('.games');
    const platformsContainer = document.querySelector('.platforms');
    const gamesItems = document.querySelectorAll('.games__item');
    const platformItems = document.querySelectorAll('.platforms__item');

    //add splide track and list to games
    const gamesInner = document.createElement('div');
    gamesInner.classList.add('splide__track');
    gamesContainer.appendChild(gamesInner);
    const gamesList = document.createElement('div');
    gamesList.classList.add('splide__list');
    gamesInner.appendChild(gamesList);
    gamesItems.forEach(function(gamesItem) {
        gamesItem.classList.add('splide__slide');
        gamesList.appendChild(gamesItem);
    });

    //add splide track and list to platforms 
    // const platformsInner = document.createElement('div');
    // platformsInner.classList.add('splide__track');
    // platformsContainer.appendChild(platformsInner);
    // const platformsList = document.createElement('div');
    // platformsList.classList.add('splide__list');
    // platformsInner.appendChild(platformsList);
    // platformItems.forEach(function(platformsItem) {
    //     platformsItem.classList.add('splide__slide');
    //     platformsList.appendChild(platformsItem);
    // });
    

    //

    //add splide track and list to platforms

    gamesContainer.classList.add('splide');
    
    
}

document.addEventListener("DOMContentLoaded", function () {

    new Splide(".splide").mount();

});



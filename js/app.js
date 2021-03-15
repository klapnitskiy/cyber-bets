

document.addEventListener("DOMContentLoaded", function () {

    

    if (window.screen.width <= 800) {
        const gamesContainer = document.querySelector('.games');
        const platformsContainer = document.querySelector('.platforms');
        const gamesItems = document.querySelectorAll('.games__item');

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
        

        // gamesItems.classList.add('.splide__slide');
        //

        //add splide track and list to platforms

        gamesContainer.classList.add('splide');
        platformsContainer.classList.add('splide');

        new Splide(".splide").mount();
    }
});


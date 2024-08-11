// ==UserScript==
// @name         Swagrantica Theme (Fragrantica)
// @namespace    http://tampermonkey.net/
// @version      BETA0.7
// @description  Change theme on Fragrantica
// @author       Wendothebigbraincodr
// @match        https://www.fragrantica.com/*
// @icon         https://i.imgur.com/ZgB6IhJ.gif
// @grant        none
// ==/UserScript==


(function() {
    'use strict';

    document.title = 'Swagrantica';

           const style = document.createElement('style');
        style.innerHTML = `
            * {
                font-family: 'Comic Sans MS', cursive !important;
            }
        `;
        document.head.appendChild(style);


    const newBackgroundImageUrl = 'https://i.imgur.com/ZgB6IhJ.gif';

    document.body.style.backgroundImage = `url(${newBackgroundImageUrl})`;

    document.body.style.backgroundSize = '10%';

    document.body.style.backgroundRepeat = 'repeat';

    document.body.style.backgroundPosition = 'top left';

      const targetImage = document.querySelector('img[src="/ndimg/fragrantica-logo-tagline-svg.svg"]');
        if (targetImage) {
            targetImage.src = 'https://i.imgur.com/G6kKjqb.png';
        }

        const newFaviconUrl = 'https://i.imgur.com/lGXfjGv.png';

    function changeFavicon() {
        const linkElements = document.querySelectorAll('link[rel*="icon"]');
        if (linkElements.length > 0) {
            linkElements.forEach(link => {
                link.href = newFaviconUrl;
            });
        } else {
            const newLink = document.createElement('link');
            newLink.rel = 'icon';
            newLink.href = newFaviconUrl;
            document.head.appendChild(newLink);
        }
    }

    function changeText(node) {
        const newText = node.nodeValue.replace(/My Fragrantica/g, 'My Swagrantica');
        if (newText !== node.nodeValue) {
            node.nodeValue = newText;
        }
    }

    function traverseAndChange(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            changeText(node);
        } else {
            node.childNodes.forEach(traverseAndChange);
        }
    }

    window.addEventListener('load', changeFavicon);
    window.addEventListener('load', function() {
        traverseAndChange(document.body);
    });



    if (window.location.href === 'https://www.fragrantica.com/fragram/') {

        const targetImage = document.querySelector('img[src="/ndimg/fragrantica-logo-svg.svg"]');
        if (targetImage) {
            targetImage.src = 'https://i.imgur.com/G6kKjqb.png';
        }
    }


    const load = `
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣤⠶⠶⠶⠶⠶⢦⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣠⡶⠛⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠛⢦⣄⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣰⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠳⣄⠀⠀⠀⠀
⠀⠀⢠⡾⠁⠀⠀⢀⣤⣤⣤⣤⣄⠀⠀⠀⠀⠀⠀⠀⠀⣠⣤⣤⣤⡙⢷⡀⠀⠀
⠀⢠⡟⠀⠀⠀⣰⣿⣿⡇⠀⠀⠙⢷⡀⠀⠀⠀⠀⢠⣾⣿⣿⠀⠀⠹⣮⢿⡀⠀
⠀⣾⠀⠀⠀⢰⡏⠙⠛⠁⠀⠀⠀⠘⡇⠀⠀⠀⠀⣸⠋⠛⠋⠀⠀⠀⢹⠈⣧⠀
⢸⡇⠀⠀⠀⠘⣧⣤⣤⣤⣤⣤⣤⣤⡇⠀⠀⠀⠀⢸⣧⣤⣤⣤⣤⣤⣾⠀⢹⡆
⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇
⢸⡇⠀⠀⠀⠀⣰⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⡶⠀⠀⣸⠇
⠀⣿⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⠀⢀⡟⠀
⠀⠘⣧⠀⠀⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⣾⠁⠀
⠀⠀⠘⢷⡀⠀⠀⢻⣿⡻⠋⠁⠀⠀⠀⠉⠻⣿⣿⣿⣿⣿⡿⠃⠀⢠⡾⠁⠀⠀
⠀⠀⠀⠀⠻⣦⡀⠀⠙⠷⣤⣀⠀⠀⠀⠀⠀⠈⣿⣿⡿⠋⠀⣀⡴⠋⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠙⠷⣤⣀⠀⠉⠛⠓⠒⠒⠒⠚⠋⠁⣠⣤⠾⠋⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠙⠛⠶⠶⠶⠶⠶⠶⠛⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀
    `;


    console.log(load)
    console.log("%c" + "Swagrantica loaded successfuly!", "color: #ffcb0d; -webkit-text-stroke: 2px black; font-size: 72px; font-weight: bold;");

})();

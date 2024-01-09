const gameContainer = document.getElementById("game-container");
const menuContainer = document.getElementById("menu-container");
const games = [
    {
        name: "Pokèmon Ruby Version",
        gameUrl: "Pokèmon - Ruby Version.gba",
        core: "gba"
    },
    {
        name: "Pokèmon Emerald Version",
        gameUrl: "Pokèmon - Emerald Version.gba",
        core: "gba"
    },
    {
        name: "Pokèmon Sapphire Version",
        gameUrl: "Pokèmon - Sapphire Version.gba",
        core: "gba"
    },
    {
        name: "Pokèmon FireRed Version",
        gameUrl: "Pokèmon - FireRed Version.gba",
        core: "gba"
    },
    {
        name: "Kirby Nightmare in Dreamland",
        gameUrl: "Kirby - Nightmare in Dreamland.gba",
        core: "gba"
    },
    {
        name: "Mario Kart 64",
        gameUrl: "Mario Kart 64.z64",
        core: "n64"
    },
    {
        name: "Super Mario 64",
        gameUrl: "Super Mario 64 (USA).z64",
        core: "n64"
    },
    {
        name: "Super Smash Bros",
        gameUrl: "Super Smash Bros.z64",
        core: "n64"
    },
    {
        name: "Mario Party 3",
        gameUrl: "Mario Party 3.z64",
        core: "n64"
    },
    {
        name: "Donkey Kong",
        gameUrl: "Donkey Kong.nes",
        core: "nes"
    },
    {
        name: "Bloons TD",
        gameUrl: "Bloons TD.nds",
        core: "nds"
    },
    {
        name: "Animal Crossing",
        gameUrl: "Animal Crossing - Wild World (USA) (Rev 1).nds",
        core: "nds"
    }
];

window.EJS_player = "#game";
window.EJS_biosUrl = "";
window.EJS_pathtodata = "data/";
window.EJS_startOnLoaded = true;

games.forEach(game => {
    const selector = document.createElement("button");
    
    selector.innerHTML = game.name;
    selector.addEventListener("click", () => {
        window.onbeforeunload = () => {
            return "e";
        }
        
        window.EJS_core = game.core;
        window.EJS_gameUrl = "games/" + game.gameUrl;

        menuContainer.hidden = true;
        menuContainer.style.display = "none";
        
        gameContainer.hidden = false;

        const script = document.createElement("script");
        
        script.src = "data/loader.js";
        document.body.appendChild(script);
    });
    
    const container = document.createElement("div");
    
    container.className = "conatiner";
    container.appendChild(selector);
    
    menuContainer.appendChild(container);
});

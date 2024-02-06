const gameContainer = document.getElementById("game-container");
const menuContainer = document.getElementById("menu-container");
const games = [
    {
        name: "Pokèmon - Ruby Version",
        gameUrl: "Pokèmon - Ruby Version.gba",
        core: "gba"
    },
    {
        name: "Pokèmon - Emerald Version",
        gameUrl: "Pokèmon - Emerald Version.gba",
        core: "gba"
    },
    {
        name: "Pokèmon - Sapphire Version",
        gameUrl: "Pokèmon - Sapphire Version.gba",
        core: "gba"
    },
    {
        name: "Pokèmon - FireRed Version",
        gameUrl: "Pokèmon - FireRed Version.gba",
        core: "gba"
    },
    {
        name: "Pokèmon - Platinum",
        gameUrl: "https://www.dropbox.com/scl/fi/u7buuu47t5ysaypmxfa3v/Pokemon-Platinum-Version-USA-Rev-1.nds?rlkey=v6jpd7bbesd6cv6gn8g9nsn23&dl=1",
        core: "nds"
    },
    {
        name: "Kirby - Nightmare in Dreamland",
        gameUrl: "Kirby - Nightmare in Dreamland.gba",
        core: "gba"
    },
    {
        name: "Kirby and The Amazing Mirror",
        gameUrl: "Kirby & The Amazing Mirror (USA).gba",
        core: "gba"
    },
    {
        name: "Kirby Super Star Ultra",
        gameUrl: "https://www.dropbox.com/scl/fi/453gsmnlts09qywk7etps/Kirby-Super-Star-Ultra-USA.nds?rlkey=v6br9qlq4fowpqqyxbrkolmqv&dl=1",
        core: "nds"
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
        name: "Mario and Luigi - Superstar Saga",
        gameUrl: "Mario & Luigi - Superstar Saga (USA).gba",
        core: "gba"
    },
    {
        name: "Mario and Luigi - Bowser's Inside Story",
        gameUrl: "https://www.dropbox.com/scl/fi/6d6p74jclb3lokivs4nvi/Mario-Luigi-Bowser-s-Inside-Story.nds?rlkey=ly7d6nkyyyjkldd1cuke982bq&dl=1",
        core: "nds"
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
        name: "Sonic Advance (Lightforce)",
        gameUrl: "0339 - Sonic Advance (E)(Lightforce).gba",
        core: "gba"
    },
    {
        name: "Sonic Advance 2",
        gameUrl: "Sonic Advance 2 (USA) (En,Ja,Fr,De,Es,It).gba",
        core: "gba"
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
    },
    {
        name: "Metroid Fusion",
        gameUrl: "Metroid Fusion (USA).gba",
        core: "gba"
    },
    {
        name: "Retro Bowl",
        gameUrl: "rb.html"
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
        if (game.core == null) {
            window.location.href = "/Emulator/" + game.gameUrl;
        }
        
        window.onbeforeunload = () => {
            return "e";
        }
        
        window.EJS_core = game.core;
        window.EJS_gameUrl = game.gameUrl.startsWith("http") ? game.gameUrl : "games/" + game.gameUrl;

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

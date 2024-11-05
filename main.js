const gameContainer = document.getElementById("game-container");
const menuContainer = document.getElementById("menu-container");
const games = [
    {
        name: "Final Fantasy IV",
        gameUrl: "https://www.dropbox.com/scl/fi/zd9yaub3jh10vy7auobe8/Final-Fantasy-IV.nds?rlkey=jzpupf506jvguk1zx4tc11d6p&st=dcd9btzd&dl=1",
        core: "nds"
    },
    {
        name: "Plants vs Zombies",
        gameUrl: "https://dl.dropboxusercontent.com/1/view/petju8kavgh7soc/Emulator%20Files/5495%20-%20Plants%20vs.%20Zombies%20%28U%29.nds",
        core: "nds"
    },
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

options = {
    // Required. Called when a user selects an item in the Chooser.
    success: (files) => {
        alert("Here's the file link: " + files[0].link)
    },

    // Optional. Called when the user closes the dialog without selecting a file
    // and does not include any parameters.
    cancel: () => {

    },

    // Optional. "preview" (default) is a preview link to the document for sharing,
    // "direct" is an expiring link to download the contents of the file. For more
    // information about link types, see Link types below.
    linkType: "direct", // or "direct"

    // Optional. A value of false (default) limits selection to a single file, while
    // true enables multiple file selection.
    multiselect: false, // or true

    // Optional. This is a list of file extensions. If specified, the user will
    // only be able to select files with these extensions. You may also specify
    // file types, such as "video" or "images" in the list. For more information,
    // see File types below. By default, all extensions are allowed.
    extensions: [".nds", ".nes", ".n64", ".z64", ".gba"],

    // Optional. A value of false (default) limits selection to files,
    // while true allows the user to select both folders and files.
    // You cannot specify `linkType: "direct"` when using `folderselect: true`.
    folderselect: false, // or true

    // Optional. A limit on the size of each file that may be selected, in bytes.
    // If specified, the user will only be able to select files with size
    // less than or equal to this limit.
    // For the purposes of this option, folders have size zero.
    // sizeLimit: 1024, // or any positive number
};

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

        if (typeof game.gameUrl === "function") {
            const { core, gameUrl } = game.gameUrl();

            window.EJS_core = core;
            window.EJS_gameUrl = gameUrl;
        } else {
            window.EJS_core = game.core;
            window.EJS_gameUrl = game.gameUrl.startsWith("http") ? game.gameUrl : "games/" + game.gameUrl;
        }

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

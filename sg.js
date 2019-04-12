var myInterval;
var numLists = 16;
var randomIn = [];
var randomOut = [];

var categories = {
    1:"ARTICLES OF CLOTHING",
    2:"DESSERTS",
    3:"CAR PARTS",
    4:"THINGS FOUND ON A MAP",
    5:"ATHLETES",
    6:"4-LETTER WORDS",
    7:"ITEMS IN A FRIDGE",
    8:"FARM ANIMALS",
    9:"STREET NAMES",
    10:"THINGS AT THE BEACH",
    11:"COLORS",
    12:"TOOLS",
    13:"FICTIONAL CHARACTERS",
    14:"MENU ITEMS",
    15:"MAGAZINES",
    16:"CAPITALS",
    17:"TYPES OF CANDY",
    18:"ITEMS YOU SAVE UP TO BUY",
    19:"FOOTWEAR",
    20:"SOMETHING YOU KEEP HIDDEN",
    21:"ITEMS IN A SUITCASE",
    22:"THINGS WITH TAILS",
    23:"SPORTS EQUIPMENT",
    24:"CRIMES",
    25:"BABY FOODS",
    26:"FAMOUS DUOS AND TRIOS",
    27:"THINGS FOUND ON A DESK",
    28:"VACATION SPOTS",
    29:"DISEASES",
    30:"WORDS ASSOCIATED WITH MONEY",
    31:"ITEMS IN A VENDING MACHINE",
    32:"MOVIE TITLES",
    33:"GAMES",
    34:"THINGS THAT YOU WEAR",
    35:"BEERS",
    36:"THINGS AT A CIRCUS",
    37:"SEXY FOODS",
    38:"THINGS THAT ARE GREEN",
    39:"THINGS YOU HATE",
    40:"LIQUIDS",
    41:"MICROWAVEABLE THINGS",
    42:"THINGS THAT SMELL BAD",
    43:"THINGS FROM SEINFELD",
    44:"TYPES OF PAIN",
    45:"REASONS TO GET DIVORCED",
    46:"COASTAL CITIES",
    47:"FAMOUS LAST WORDS",
    48:"THINGS YOU LICK",
    49:"NICKNAMES",
    50:"TIGHT PLACES",
    51:"THINGS THAT ARE HOT",
    52:"BRANDS OF ALCOHOL",
    53:"THINGS YOU OPEN",
    54:"TYPES OF CURRENCY",
    55:"LONG WORDS (10+)",
    56:"JOBS YOU DON'T WANT",
    57:"CHAIN RESTAURANTS",
    58:"VILLIANS",
    59:"SONG TITLES",
    60:"SCHOOL SUBJECTS",
    61:"BOY'S NAMES",
    62:"THINGS THAT ARE COLD",
    63:"TV SHOWS",
    64:"MUSICAL INSTRUMENTS",
    65:"RIVERS",
    66:"MOVIE TITLES",
    67:"ANIMALS",
    68:"FRUITS",
    69:"SCHOOL SUPPLIES",
    70:"THINGS THAT GROW",
    71:"THINGS THAT ARE BLACK",
    72:"INSECTS",
    73:"BODIES OF WATER",
    74:"GAMES",
    75:"HOLIDAYS",
    76:"CARTOON CHARACTERS",
    77:"GIRL'S NAMES",
    78:"CLOTHING",
    79:"AUTHORS",
    80:"BIRDS",
    81:"COUNTRIES",
    82:"THINGS THAT ARE SQUARE",
    83:"APPLIANCES",
    84:"SPORT STARS",
    85:"THINGS FOUND IN THE OCEAN",
    86:"TOOLS",
    87:"GIFTS",
    88:"TYPES OF DRINKS",
    89:"SUPERHEROES",
    90:"PARTS OF THE BODY",
    91:"HOBBIES",
    92:"BREAKFAST FOODS",
    93:"CITIES",
    94:"ICE CREAM FLAVORS",
    95:"FLOWERS",
    96:"STATES OR PROVINCES",
    97:"THINGS THAT HAVE SPOTS",
    98:"WORLD LEADERS",
    99:"THINGS IN A PARK",
    100:"STONES/GEMS",
    101:"ITEMS IN A CATALOG",
    102:"MUSICAL INSTRUMENTS",
    103:"EXCUSES FOR BEING LATE",
    104:"THINGS THAT JUMP",
    105:"SANDWICHES",
    106:"TV STARS",
    107:"DRUGS",
    108:"PIZZA TOPPINGS",
    109:"ITEMS IN THIS ROOM",
    110:"COLLEGES",
    111:"HISTORICAL FIGURES",
    112:"TERMS OF ENDEARMENT",
    113:"THINGS IN THE SKY",
    114:"MENU ITEMS",
    115:"FOOTWEAR",
    116:"SPORTS EQUIPMENT",
    117:"COMPUTER SOFTWARE",
    118:"COSMETICS/TOILETRIES",
    119:"THINGS THAT ARE STICKY",
    120:"SPICES/HERBS",
    121:"BAD HABITS",
    122:"REPTILES/AMPHIBIANS",
    123:"PARKS",
    124:"THINGS YOU'RE ALLERGIC TO",
    125:"CELEBRITIES",
    126:"CARS",
    127:"COOKING UTENSILS",
    128:"THINGS IN A MEDICINE CABINET",
    129:"TOYS",
    130:"HOUSEHOLD CHORES",
    131:"THINGS THAT ARE ROUND",
    132:"HALLOWEEN COSTUMES",
    131:"WEAPONS",
    132:"THINGS YOU SHOUT",
    133:"ETHNIC FOODS",
    134:"THINGS YOU REPLACE",
    135:"PERSONALITY TRAITS",
    136:"THINGS YOU PLUG IN",
    137:"TREES",
    138:"BRANDS",
    139:"DISNEY CHARACTERS",
    140:"GAME SHOWS",
    141:"THINGS WITH A REMOTE",
    142:"ACRONYMS",
    143:"BOARD GAMES",
    144:"WORDS WITH DOUBLE LETTERS",
    145:"VIDEO GAMES",
    146:"THINGS IN A GROCERY STORE",
    147:"COMPUTER PARTS",
    148:"DIET FOODS",
    149:"THINGS THAT HAVE STRIPES",
    150:"WEBSITES",
    151:"BANDS OR ARTISTS",
    152:"SEAFOOD",
    153:"WAYS TO DIE",
    154:"LANGUAGES",
    155:"ADJECTIVES",
    156:"RELATIVES",
    157:"THINGS THAT HAVE SPOTS",
    158:"VEGETABLES",
    159:"THINGS YOU THROW AWAY",
    160:"CARD GAMES",
    161:"TOURIST ATTRACTIONS",
    162:"CHRISTMAS SONGS",
    163:"CHILDREN'S BOOKS",
    164:"PLACES IN EUROPE",
    165:"MATH TERMS",
    166:"OLYMPIC EVENTS",
    167:"FOODS YOU EAT RAW",
    168:"ANIMALS",
    169:"THINGS TO DO AT A PARTY",
    170:"KINDS OF SOUP",
    171:"THINGS IN NEW YORK CITY",
    172:"SPICY FOODS",
    173:"THINGS YOU GET TICKETS FOR",
    174:"PHONE APPS",
    175:"HONEYMOON SPOTS",
    176:"THINGS YOU BUY FOR KIDS",
    177:"HISTORIC EVENTS",
    178:"THINGS YOU DO EVERYDAY",
    179:"THINGS YOU SIT ON",
    180:"TYPES OF WEATHER",
    181:"THINGS THAT HAVE BUTTONS",
    182:"LANDMARKS",
    183:"REASONS TO CALL 911",
    184:"TERMS OF MEASUREMENT",
    185:"AWARDS/CEREMONIES",
    186:"THINGS FOUND AT A BAR",
    187:"HONEYMOON SPOTS",
    188:"SPORTS PLAYED INDOORS",
    189:"FAMOUS FEMALES",
    190:"MONSTERS"
}

function rollLetterDie() {
    clearInterval(myInterval);
    $('timer').update();
    $$('.my_span').invoke('hide');

    var roll = Math.floor(Math.random() * 20) + 1;
    $('letter_die_'+roll).show();
}


function startTimer() {
    clearInterval(myInterval);
    $('timer').show();
    var duration = 60*3;
    var start = Date.now(), diff, minutes, seconds;
    function timer() {
        // get the number of seconds that have elapsed since 
        // startTimer() was called
        diff = duration - (((Date.now() - start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        if (minutes == 0 && seconds == 0) {
            clearInterval(myInterval);
            $('timer').update("TIME'S UP");
            return;
        }

        $('timer').textContent = minutes + ":" + seconds;         

        if (diff <= 0) {
            // add one second so that the count down starts at the full duration
            // example 05:00 not 04:59
            start = Date.now() + 1000;
        }
    };
    // we don't want to wait a full second before the timer starts
    timer();
    myInterval = setInterval(timer, 1000);
}

document.onkeydown = leftRight;

function leftRight(e) {
    if (e.keyCode == '37') {
        //left
        chooseList('right');
        return false;
    } else if (e.keyCode == '38') {
        //up
        rollLetterDie();
        return false;
    } else if (e.keyCode == '39') {
        //right
        chooseList('left');
        return false;
    } else if (e.keyCode == '40') {
        //down
        start_timer();
        return false;
    }
} 

function chooseList(el) {
    $('custom_btn').show();
    $('clear_custom').hide();
    $('add_custom').hide();

    if ($('custom_list')) $('custom_list').hide(); $('list_img').show();
    var num;

    if (el == 'right') {
        var reg = /lists\/list(\d+)/;
        num = parseInt((reg.exec($('list_img').src))[1]);
        num--;

    } else if (el == 'left') {
        var reg = /lists\/list(\d+)/;
        num = parseInt((reg.exec($('list_img').src))[1]);
        num++;

    } else {
        num = parseInt(el);
    }

    if (num > numLists) {
        num = 1;
    } else if (num < 1) {
        num = numLists;
    }
    $('list_img').src = 'lists/list'+num+'.png';
}

function randomList () {
    $('custom_btn').show();
    $('clear_custom').hide();
    $('add_custom').hide();

    var num = Math.floor(Math.random() * 16) + 1;
    $('list_img').src = 'lists/list'+num+'.png';
}

// function randomList() {
//     var cat;

//     for (var i=1; i <= 12; i++) {
//         cat = categories[Math.floor(Math.random() * 190) + 1]
//         randomListClosure(cat, i);
//     }

//     //display
//     $('list_img').hide();
//     $('custom_list').show();
// }

// function randomListClosure(cat, i) {
//         if (cat.length > 22)
//             $('cat_'+i).style.fontSize = '24px';
//         else
//             $('cat_'+i).style.fontSize = '28px';
//         $('cat_'+i).update(cat);    
// }

function createCustom() {
    $('custom_btn').hide();
    $('list_img').hide();

    $('clear_custom').show();
    $('add_custom').show();
    $('custom_list').show();
}

function addCustom() {

}

function setUpOnclicks() {
    //buttons
    $('roll_btn').addEventListener('click', function(){rollLetterDie()});
    $('timer_btn').addEventListener('click', function(){startTimer()});
    $('custom_btn').addEventListener('click', function(){createCustom()});
    $('add_custom').addEventListener('click', function(){addCustom()});

    //list links
    $('random').addEventListener('click', function(){randomList()});
    $('list_right').addEventListener('click', function(){chooseList('right')});
    $('list_left').addEventListener('click', function(){chooseList('left')});
    
    for (var i=1; i <= numLists; i++) {
        $('list_'+i).addEventListener('click', closure(i), false);
    }
}

function closure(i) {
    return function() {chooseList(i)}
}

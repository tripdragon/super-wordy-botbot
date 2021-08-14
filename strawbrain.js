




var excitmentWords = [
  'cool', "inspiring", "great", "moving", "mind changing", "popcorn", "tacos", "amazing", "interesting"
]

var inspired = [
  "inspired", "excited", "wowed", "blown away", "intoxicated", "enlightened"
]

var venues = [
  "arts", "music", "food", "customs", "seacoast", "walking", 
  "strolling", "beer", "painting", "skateboarding", "biking", "lobster fighting",
  "craft beer", "wine", "all around"
]

var lessons = [
  "lectures", "lessons", "coummnity building", "teachings", "discussions" 
]

var enjoyVerb = [
  "enjoy", "drink", "eat", "laugh", "spin", "design", "dance", "exersize", "jam"
]

// puralize need

var subjectPeople = [
  // "men", "women", 
  "patrions", "vets", "artistic", "artists",
  "teachers", "students", "cthulhu", "jimmy two shoes"
]

var menWomenOther = [
  "men", "women", "cthulhu"
]

var place = [
  "portland", "bangor", "cumberland", "space", "biddeford", "freeport",
  "yarmouth"
  // "your town"
]

var smallPlace = [
  "park", "bar", "studio", "coliseum", "jazz house", "club", "area 51"
]

var huntingVerb = [
  "looking", "seeking", "finding", "wanting", "needing"
]

var explore = [
  "explore", "seek", "journey", "enjoy", "partake", "eat at", "paint with",
  "colaborate with"
]

var arttype = [
  "painter", "sculpter", "computer artist", "graphiti", "new age"
]

var eventtype = [
  "rock", "jazz", "in the park", "concert"
]

var eventtypePural = [
  "rocking", "jazzing", "concerting", "dancing", "drinking", "dining", "desiging"
]

var season = [
  "spring", "summer", "fall", "winter", "apocalypse", "thaw"
]

var holiday = [
  "christmas", "Kansas Day", "Employee Appreciation Day", "Cinco de Mayo",
  "Juneteenth", "Chanukah", "boat return day"
]

var well = [
  "well", "wait till"
]

var needBe = [
  "Need to be", "Wanna be", "Waiting for", "Cant wait for"
]

var arriving = [
  "Coming to", "Soon at", "In the works", "Now arriving at"
]

var subjectSelf = [
  "your", "our", "everyones"
]

var inspiration = [
  "inspiration", "relaxing"
]

var foods = [
  "tacos", "beer", "lobster", "hotdogs", "filet mignon", "sushi", "cider", "breakfast", 
  "pizza slice", "iced coffee"
]

var openingQuestion = [
  // "What more", "How can", "Why", "Where else", "Can you", "When else", "Wanna"
  "What", "How", "Why", "Where", "Can", "When", "Wanna"
]

var openingWord = [
  "Welcome", "Sit back and", "Join us for", "Why not join", "In just a few",
  "Starting today", "Starting at", "Continue"
]

var day = [
  "day", "night", "evening", "dawn", "year", "month"
]

//tools
function rando(subjectList){
  return subjectList[Math.floor((Math.random()*subjectList.length))];
}

function capital(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

//slug lines, titles
var phrases = [
  function(){ return `Coming to ${capital(rando(place))}, lets get ${rando(excitmentWords)} for ${rando(holiday)} at ${rando(place)}!`   },
  function(){ return `${rando(arriving)} ${capital(rando(place))}, lets get ${rando(excitmentWords)} for ${capital(rando(holiday))}!`   },
  function(){ return `Need to be to ${ rando(inspired)}? ${ capital(rando(well))} ${ capital(rando(place))} is going meet ${rando(subjectSelf)} demands!`   },
  function(){ return `${ rando(needBe)} a moment to be ${ rando(inspired)}? ${ capital(rando(well))} ${ capital(rando(place))} is going meet your demands!`   },
  function(){ return `Welcome to ${capital(rando(place))}, explore and enjoy our amazing ${rando(venues)} district.`},
  function(){ return `Find ${rando(excitmentWords)} and ${rando(excitmentWords)} ${rando(lessons)} throughout ${capital(rando(place))}.`},
  function(){ return `Remember to favorite various ${rando(venues)} events and ${rando(venues)} venues to plan better in the future.`},
  function(){ return `Before the ${rando(season)} arrives, be sure to ${rando(explore)} at ${rando(venues)} in ${capital(rando(place))}`},
  function(){ return `Lets ${rando(enjoyVerb)} with ${rando(subjectPeople)} and go ${rando(eventtypePural)} in the ${rando(smallPlace)}`},
  function(){ return `> ${rando(openingQuestion)} not be ready for ${rando(season)}'s open invite to ${rando(enjoyVerb)} alongside ${rando(subjectPeople)} all ${rando(day)}` },
  
  
  
]



var superlist = []

for (var i = 0; i < 40; i++) {
  // console.log(phrases[0]());
  // superlist.push(phrases[0]());
  console.log( rando(phrases)() );
  superlist.push(rando(phrases)());
}

// for (var i = 0; i < 40; i++) {
//   console.log( rando(phrases)() );
//   // superlist.push(phrases[0]());
// }


// pick = document.createElement("ul")
var pick = document.getElementById('listamatic');

for (var i = 0; i < superlist.length; i++) {
  var p = document.createElement("li");
  p.innerText = superlist[i];
  pick.append(p);
}

console.log("sdkljgnfdfklgh");

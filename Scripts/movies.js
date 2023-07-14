
class Movie {
    constructor(title, year, director, actors, note) {
        this.title = title;
        this.year = year;
        this.director = director;
        this.actors = actors;
        this.note = note;
    }
    description() {
        console.log(`Movie info:
          Title: ${this.title}
          Year: ${this.year}
          Director: ${this.director}
          Actors: ${this.actors}
          Budget: ${this.budget}
          Note: ${this.note}
          `);
    }
}

class FullMovie extends Movie {
    #budget
    constructor(title, year, director, actors, note, budget) {
        super(title, year, director, actors, note)
    }
    get budget() {
        return this.Budget;
      }
    
    set budget(value) {
    this.Budget = value;
    }
}

const fullMovies = [
    new FullMovie("Total Recall", 1990, "Paul Verhoeven", ["Arnold Schwarzenegger", "Sharon Stone"], 7.5, null),
    new FullMovie("Mission to Mars", 2000, "Brian De Palma", ["Tim Robbins", "Gary Sinise"], 5.7, null),
    new FullMovie("Red Planet", 2000, "Antony Hoffman", ["Val Kilmer", "Carrie-Anne Moss"], 5.7, null),
    new FullMovie("The Last Days on Mars", 2013, "Ruairi Robinson", ["Liev Schreiber", "Elias Koteas"], 5.5, null),
    new FullMovie("The Martian", 2015, "Ridley Scott", ["Matt Damon", "Sean Bean"], 8.0, null),
    new FullMovie("Looking for Life on Mars", 2021, "Terri Randall", ["Craig Sechler"], 7.3, null)
]

fullMovies[3].budget = "$10.6 mil.";
const moviesContainer = document.getElementById("moviesContainer");
moviesContainer.innerHTML = "";
const videos = [
  "https://www.youtube.com/embed/WFMLGEHdIjE",
  "https://www.youtube.com/embed/UHfG7hgilwY",
  "https://www.youtube.com/embed/PHYX64r5Y0k",
  "https://www.youtube.com/embed/u9GqPNcDjBo",
  "https://www.youtube.com/embed/ej3ioOneTy8",
  "https://www.youtube.com/embed/fhtw7Dpntb4"
];

const videoLinks = [
  "https://www.imdb.com/title/tt0100802/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_total%2520rec",
  "https://www.imdb.com/title/tt0183523/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_mision%2520to%2520mars",
  "https://www.imdb.com/title/tt0199753/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_red%2520planet",
  "https://www.imdb.com/title/tt1709143/?ref_=nv_sr_srsg_3_tt_8_nm_0_q_the%2520last%2520day",
  "https://www.imdb.com/title/tt3659388/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_the%2520martian",
  "https://www.imdb.com/title/tt15831294/?ref_=nv_sr_srsg_1_tt_8_nm_0_q_looking%2520for%2520life%2520"
];

createMoviesPage();

function createMoviesPage() {
  for (let element in fullMovies) {
    let movie = fullMovies[element];

    const card = document.createElement("div");
    

    createMovieCard(card);
    createVideoFrame(videos[element], card);
    createParagraphProperties(movie, card);
    createButtonLink(videoLinks[element], card);

    moviesContainer.appendChild(card);
  } 
}

function createMovieCard (poster) {
  poster.className = "card";
  poster.style.border = "1px solid #ccc";
  poster.style.margin = "10px 0 0 0";
  poster.style.padding = "10px";
  poster.style.height = "420px";
  poster.style.width = "30%";
  poster.style.backgroundColor="#a83b2a";
}
  
function createVideoFrame(video, poster) {
  const iframe = document.createElement("iframe");
  iframe.src = video;
  iframe.width = "100%";
  iframe.height = "200px";
  poster.appendChild(iframe);
}
  
function createButtonLink(link, poster) {
  const buttLink = document.createElement("button");
  buttLink.textContent = "See more ...";
  buttLink.style.backgroundColor = "#f0ae74";
  buttLink.style.color = "#081d6b";
  buttLink.style.width = "45%";
  buttLink.style.height = "30px";
  buttLink.style.fontSize = "15px";
  buttLink.style.borderRadius = "12px";
  buttLink.addEventListener("click", function() {
    const videoLink = link;
    window.open(videoLink);
  });
  poster.appendChild(buttLink);
}
  
  
function createParagraphProperties(title, poster) {
  const prop = document.createElement("p");
  prop.style.fontSize = "15px";
  prop.style.color = "#00FFEF";
  prop.style.fontFamily = "'Montserrat', 'Helvetica', 'Arial', 'sans-serif'";
  prop.style.padding ="10px 0";
  let isBudget = false;
  for (const [key,value] of Object.entries(title)) {
    let displayedKey = key;
    if (key === "note") {
      displayedKey = "IMDB note";
    }
    if (key ==='Budget') {
      isBudget = true;
    }
    prop.innerHTML += `<span class="bold">${displayedKey.toLocaleUpperCase()} : ${value}<br />`;
  }

  if (isBudget == false) {
    prop.innerHTML +=`<br>`;
  }
  poster.appendChild(prop);
}
  

// Function to handle responsive layout changes
function handleResponsiveLayout() {
  const moviesContainer = document.getElementById("moviesContainer");
  const movieCards = document.querySelectorAll(".card");
  const screenWidth = window.innerWidth;

  if (screenWidth >= 768) {
    moviesContainer.style.display = "flex";
    moviesContainer.style.flexWrap = "wrap";
    movieCards.forEach((card) => {
      card.style.width = "calc(33% - 20px)";
    });
  } else {
    movieCards.forEach((card) => {
      card.style.width = "100%";
    });
  }
}

// Call the handleResponsiveLayout function on window resize
window.addEventListener("resize", handleResponsiveLayout);

// Call the handleResponsiveLayout function initially
handleResponsiveLayout();


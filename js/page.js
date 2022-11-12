// Search Query

const url = window.location.search;
const urlquery = new URLSearchParams(url);
const urlKey = urlquery.get("Key");

// Api

let Movie = null;
// // Get Api
fetch("https://bogotas.github.io/_Apis/Movies/index.json")
  .then((res) => res.json())
  .then((result) => {
    Movie = result;
    loadApis();
  });

// // NOTE
// // i'm gonna parse the url so my websites json data is not effected;
function loadApis() {
  let Movies_container = document.getElementById("Movies-container");
  let Movies_item = Movie.map((i) => {
    const { Poster, Name, Key } = i;
    // console.log(Key);

    for (let j = -1; j < Movie.length; j++) {
      let ApiKey = Key[j];
      if (ApiKey === urlKey) {
        let data =  Movie[ApiKey - 1]
        const { Poster, Name, Key, Release, Genres, IMDB, Country } = data;
        document.title = Name;

        return `
        <section class="movie-section" key=${Key}>
        <div class="movie-card">
          <figure>
            <img src="${Poster}" alt="image" />
          </figure>
          <div class="card-content">
            <p class="title">${Name}</p>
            <p class=""></p>
            <p class="card-text">${Release}</p>
            <p class="card-text">${Genres}</p>
            <p class="card-text">${IMDB} / 10</p>
            <p class="card-text">${Country}</p>
          </div>
        </div>
      </section>
          `;
      }
    }
  });
  Movies_container.innerHTML = Movies_item.join("");
}

// Search Query

const url = window.location.search;
const urlquery = new URLSearchParams(url);
const urlKey = urlquery.get("Key");

// Api

let Movie = null;
// // Get Api
fetch("https://atugatran-projects.github.io/_Apis/Movies/index.json")
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
    const { Key } = i;
      let ApiKey = Key;
      if (ApiKey === urlKey) {
        let data = Movie[ApiKey - 1];
        const {
          Title,
          Desc,
          Poster,
          Subtitles,
          Screenshots1,
          Screenshots2,
          Screenshots3,
          Screenshots4,
          Language,
          Download_title,
          Download,
          Quality,
          Movie_story,
          Format,
          Size,
          Name,
          Key,
          Release,
          Genres,
          IMDB,
          Country,
        } = data;
        document.title = Name;
        return ` 
  <section class="movie-section" key=${Key}>
    <!-- Top -->
    <div class="top-section">
        <h1 class="heading">${Title}</h1>
        <p class="desc">${Desc}</p>
    </div>
    <!-- Card -->
    <div class="movie-card">
        <figure>
            <img src="${Poster}" alt="image" />
        </figure>
        <div class="card-content">
            <p class="title">${Name}</p>
            <p class="card-text">${Release}</p>
            <p class="card-text">${Genres}</p>
            <p class="card-text">${IMDB} / 10</p>
            <p class="card-text">${Country}</p>
        </div>
    </div>
    <!-- Bottom -->
    <div class="Bottom-section">
        <div class="MovieInfo_cont">
            <table class="MovieInfo">
                <h2 class="subheading">Movie Info:</h2>
                <tr>
                    <th class="data">Movie Name &nbsp; :-) &nbsp;</th>
                    <td class="data">${Name}</td>
                </tr>
                <tr>
                    <th class="data">Language &nbsp; :-) &nbsp; </th>
                    <td class="data">${Language}</td>
                </tr>
                <tr>
                    <th class="data">Released &nbsp; :-) &nbsp; </th>
                    <td class="data">${Release}</td>
                </tr>
                <tr>
                    <th class="data">Subtitle &nbsp; :-) &nbsp; </th>
                    <td class="data">${Subtitles}</td>
                </tr>
                <tr>
                    <th class="data">Size &nbsp; :-) &nbsp; </th>
                    <td class="data">${Size}</td>
                </tr>
                <tr>
                    <th class="data">Quality &nbsp; :-) &nbsp; </th>
                    <td class="data">${Quality}</td>
                </tr>
                <tr>
                    <th class="data">Format &nbsp; :-) &nbsp; </th>
                    <td class="data">${Format}</td>
                </tr>
            </table>
        </div>
        <h3 class="center-subheading">Movie-SYNOPSIS/PLOT:</h3>
        <p class="Movie-story">${Movie_story}</p>
        <h3 class="center-subheading">Screenshots: (Must See Before Downloading)</h3>
        <div class="Screenshots">
            <figure>
                <img src="${Screenshots1}" class="img_screenshot" alt="Screenshots">
                <img src="${Screenshots2}" class="img_screenshot" alt="Screenshots">
                <img src="${Screenshots3}" class="img_screenshot" alt="Screenshots">
                <img src="${Screenshots4}" class="img_screenshot" alt="Screenshots">
            </figure>
            <div class="center-subheading">
                <h3 class="center-subheading">${Download_title}</h3>
                <a href="${Download}" class="download-btn">Download</a>
            </div>
        </div>
    </div>
    <div class="left-cont">
    <a href="index.html" class="download-btn">Back</a>
    <div>
</section>
  `;
    //   }
    }
  });
  Movies_container.innerHTML = Movies_item.join("");
}

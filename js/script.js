let Movie = null;
// Get Api
fetch("https://bogotas.github.io/_Apis/Movies/index.json")
  .then((res) => res.json())
  .then((result) => {
    Movie = result;
    loadApis();
  });

// NOTE
// i'm gonna parse the url so my websites json data is not effected;
function loadApis() {
  let Movies_container = document.getElementById("Movies-container");
  let Movies_item = Movie.map((i) => {
    const { Poster, Name, Key } = i;
    const movieName = Name.substring(0, 15);
    const shortName = movieName.length > 13 ? `${movieName}...` : movieName;
    const Query = "page.html?Key=" + Key;

    return `
    <a href=${Query} class="card_con">
        <div class="card">
            <div class="card-info">
                <h2 class="Name">${shortName}</h2>
                <img src=${Poster} alt="#" />
            </div>
        </div>
    </a>
      `;
  });
  Movies_container.innerHTML = Movies_item.join("");
}

// Search

let search = document.getElementById("search");

let searchfunc = () => {
  let titles = document.getElementsByClassName("Name");
  let data = document.getElementById("text").value.toUpperCase();
  let card_con = document.getElementsByClassName("card_con");

  for (let i = 0; i < titles.length; i++) {
    let title = titles[i];
    let titleData = title.textContent || title.innerHTML;

    if (titleData) {
      if (titleData.toUpperCase().indexOf(data) > -1) {
        card_con[i].style.display = "";
      } else {
        card_con[i].style.display = "none";
      }
    }
  }
};

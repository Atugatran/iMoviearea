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
    const { Porter, Name } = i;
    const movieName = Name.substring(0, 15);
    const shortName = movieName.length > 13 ? `${movieName}...` : movieName;
    return `
    <a href="#" class="card_con">
        <div class="card">
            <div class="card-info">
                <h2 class="Name">${shortName}</h2>
                <img src=${Porter} alt="#" />
            </div>
        </div>
    </a>
      `;
  });
  Movies_container.innerHTML = Movies_item.join("");
}



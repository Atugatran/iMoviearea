import { useEffect } from "react";

const Search = () => {
  // Js
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

  useEffect(() => {
    searchfunc();
  }, []);
  //   Html
  return (
    <section className="search-section">
      <h2>Search Your Favourite Movie</h2>
      <form action="#">
        <div>
          <input
            id="text"
            type="text"
            placeholder="search movie"
            onKeyUp={searchfunc}
          />
        </div>
      </form>
    </section>
  );
};

export default Search;

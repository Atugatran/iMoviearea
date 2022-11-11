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

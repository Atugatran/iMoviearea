import React from "react";
import Movies from "./Movies";
import Search from "./Search";

const Home = () => {
  return (
    <div className="container">
      <Search />
      <section className="movie-page">
        <div className="grid grid-4-col" id="Movies-container">
          <Movies />
        </div>
      </section>
    </div>
  );
};

export default Home;

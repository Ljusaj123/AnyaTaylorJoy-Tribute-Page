import React from "react";
import movies from "../const/movies";

function Career() {
  return (
    <section className="career">
      <div className="career-container">
        <div className="title-container">
          <h1>Career</h1>
          <h2>Best Film and TV Roles, According To Rotten Tomatoes</h2>
        </div>
        <div className="movies-container">
          {movies.map((movie, index) => {
            return (
              <div className="movie" key={index}>
                <img
                  src={movie.picture_url}
                  width={800}
                  height={400}
                  alt="we"
                />
                <h1>
                  {movie.title}, {movie.year}
                </h1>
                <p>Rating: {movie.rating}%</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Career;

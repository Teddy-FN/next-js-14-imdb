import Result from "@/components/Result";
import React from "react";
const API_KEY = process.env.API_KEY;

export default async function SearchTerms({ params }) {
  const search = params.searchTerms;
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}&include_adult=false&language=en-US&page=1`
  );

  const data = await response.json();
  const movie = data.results;
  return (
    <div>
      {movie && movie.length < 1 ? (
        <div className="text-center pt-6">
          <h1>Movie Not Found</h1>
        </div>
      ) : (
        <Result result={movie} />
      )}
    </div>
  );
}

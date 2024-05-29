import React from "react";
const API_KEY = process.env.API_KEY;
import Image from "next/image";

export default async function MoviePage({ params }) {
  const id = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  const data = await res.json();
  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            data.backdrop_path || data.poster_path
          }`}
          alt={data.title}
          width={500}
          height={300}
          className="rounded-lg"
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        ></Image>

        <div className="p-2">
          <h2 className="text-xl mb-3 font-bold">{data.title || data.name}</h2>
          <p className="text-lg mb-3">{data.overview}</p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Realesed :</span>
            {data.release_date || data.first_air_date}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating :</span>
            {data.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFillHandThumbsUpFill } from "react-icons/bs";

export default function Card({ item }) {
  console.log(item);
  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
      <Link href={`/movies/${item.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            item.backdrop_path || item.poster_path
          }`}
          alt={item.title}
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300"
        />
      </Link>

      <div className="p-2">
        <p className="line-clamp-2 text-md">{item.overview}</p>
        <h2 className="text-lg font-bold truncate">
          {item.title || item.name}
        </h2>
        <p className="flex items-center">
          {item.release_date || item.first_air_date}
          <BsFillHandThumbsUpFill className="h-5 mr-1 ml-1" />
          {item.vote_count}
        </p>
      </div>
    </div>
  );
}

import Image from "next/image";
import React from "react";

async function MoviePage({ params }) {
  const movieId = params.id;

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  const data = await response.json();

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex  flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            data.backdrop_path || data.poster_path
          }`}
          width={500}
          height={300}
          className="rounded-lg"
          style={{ maxWidth: "100%", height: "100%" }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="movie poter"
        ></Image>
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">
            Title:{data.original_title}
          </h2>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Overview:</span>{" "}
            {data.overview}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Release:</span>
            {data.release_date}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating:</span>
            {data.vote_count}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Tagline:</span>
            {data.tagline}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MoviePage;

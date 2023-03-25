import Image from "next/image";
import { MOVIES_BASE_URL } from "../constants/movies";
import { useState, useEffect } from "react";
import { FaPlay } from 'react-icons/fa'
import { InformationCircleIcon } from "@heroicons/react/24/outline";


function Hero({ netflixOriginals }) {
  const [movie, setMovie] = useState(netflixOriginals);

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);

  console.log(movie);
  return (
    <div className="text-white flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      {/* {movie.length === 0 ? (
        <div>Loading...</div>
      ) : ( */}
      <div className="absolute -z-10 h-[95vh] w-screen top-0 left-0">
        <Image
          src={`${MOVIES_BASE_URL}${movie.backdrop_path || movie.poster_path}`}
          priority
          fill
          alt={movie.title | "Movie Poster"}
          className="object-fit"
        />
      </div>
      <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
        {movie.title || movie.original_title}
      </h1>
      <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        {movie.overview}
      </p>
      {/* )} */}
      <div className="flex space-x-3">
        <button className="heroButton bg-white text-black">
          <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" />
          Play
        </button>
        <button className="heroButton bg-[gray]/70">
          <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" />
          More Info
        </button>
      </div>
    </div>
  );
}

export default Hero;

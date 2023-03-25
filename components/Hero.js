import Image from "next/image";
import { MOVIES_BASE_URL } from "../constants/movies";
import { useState, useEffect } from "react";

function Hero({ netflixOriginals }) {
  const [movie, setMovie] = useState(netflixOriginals | null);

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);

  console.log(movie);
  return (
    <div className="">
      <Image
        src={`${MOVIES_BASE_URL}${movie.backdrop_path || movie.poster_path}
`}
        fill
        alt="s"
      />
    </div>
  );
}

export default Hero;

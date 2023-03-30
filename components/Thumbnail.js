import Image from "next/image";
import Link from "next/link";

function Thumbnail({ movie }) {
  // console.log(movie);
  return (
    <Link
      href={{
        pathname: "/[id]", // the path which will be the [id] page
        query: movie, // the movie data I want to pass to the dynamic page [id]
      }}
    >
      <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
        <Image
          key={movie.id}
          src={`https://image.tmdb.org/t/p/w500${
            movie.backdrop_path || movie.poster_path
          }`}
          className="rounded-sm object-cover md:rounded"
          fill
          alt={movie.title || "Movie Poster"}
        />
      </div>
    </Link>
  );
}

export default Thumbnail;

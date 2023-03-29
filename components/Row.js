import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import Thumbnail from "@/components/Thumbnail";

function Row({ title, movies }) {
  return (
    <main className="h-40 space-y-0.5 md:space-y-2 text-[#e5e5e5]">
      <h2 className="w-56 cursor-pointer text-sm font-semibold transition duration-200 hover:text-white md:text-2xl">
        {title}
      </h2>
      <section className="group relative md:-ml-2">
        <ChevronRightIcon className="absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 opacity-0 cursor-pointer  transition hover:scale-125 group-hover:opacity-100" />
        <div className="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2">
          {movies.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>
        <ChevronLeftIcon className="absolute top-0 bottom-0 left-2 z-40 opacity-0 m-auto h-9 w-9 cursor-pointer transition hover:scale-125 group-hover:opacity-100" />
      </section>
    </main>
  );
}

export default Row;

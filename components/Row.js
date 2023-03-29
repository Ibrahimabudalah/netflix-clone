import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import Thumbnail from "@/components/Thumbnail";
import { useRef, useState } from "react";

function Row({ title, movies }) {
  const referance = useRef(0);
  //   const [isMoved, setIsMoved] = useState(false);

  //   const handleClick = () => {
  //     setIsMoved(true);
  //     if (referance.current) {
  //       const { scrollLeft, clientWidth } = referance.current;

  //       const scrollTo =
  //         String === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
  //       referance.current.scrollTo({ left: scrollTo, behavior: "smooth" });
  //     }
  //   };

  const scrollLeft = () => {
    const left = referance.current;
    const xScroll = -350;
    const yScroll = 0;
    left.scrollBy({ top: yScroll, left: xScroll, behavior: "smooth" });
  };

  const scrollRight = () => {
    const right = referance.current;
    const xScroll = 350;
    const yScroll = 0;
    right.scrollBy({ top: yScroll, left: xScroll, behavior: "smooth" });
  };

  return (
    <main className="h-40 space-y-0.5 md:space-y-2 text-[#e5e5e5]">
      <h2 className="w-56 cursor-pointer text-sm font-semibold transition duration-200 hover:text-white md:text-2xl">
        {title}
      </h2>
      <section className="group relative md:-ml-2">
        <ChevronLeftIcon
          className="absolute top-0 bottom-0 right-2 z-40 opacity-0 m-auto h-9 w-9 cursor-pointer transition hover:scale-125 group-hover:opacity-100"
          onClick={scrollLeft}
        />
        <div
          ref={referance}
          className="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2"
        >
          {movies.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>
        <ChevronRightIcon
          className="absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 opacity-0 cursor-pointer  transition hover:scale-125 group-hover:opacity-100"
          onClick={scrollRight}
        />
      </section>
    </main>
  );
}

export default Row;

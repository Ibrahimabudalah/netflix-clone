import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

function Movie() {
  const router = useRouter();
  const query = router.query;
  const [data, setData] = useState(null);

  const BASE_URL = "https://api.themoviedb.org/3";
  useEffect(() => {
    if (router.isReady) {
      fetch(
        `${BASE_URL}/movie/${query.id}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
      )
        .then((res) => res.json())
        .then((data) => {
          setData(data.results);
        });
    } 
    //the above fetch is used to fetch all trailers corresponding with the movie ID using the id obtained from the router query
  }, [router.isReady]);
  return (
    <div>
      <Navbar />
      <h1>{query.original_title || query.name || query.original_name}</h1>
    </div>
  );
}

export default Movie;
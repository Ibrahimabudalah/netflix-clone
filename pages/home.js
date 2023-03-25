import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export async function getServerSideProps() {
  const BASE_URL = "http:localhost:3000/api";
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(`${BASE_URL}/netflixOriginals`).then((res) => res.json()),
    fetch(`${BASE_URL}/trending`).then((res) => res.json()),
    fetch(`${BASE_URL}/topRated`).then((res) => res.json()),
    fetch(`${BASE_URL}/actionMovies`).then((res) => res.json()),
    fetch(`${BASE_URL}/comedyMovies`).then((res) => res.json()),
    fetch(`${BASE_URL}/horrorMovies`).then((res) => res.json()),
    fetch(`${BASE_URL}/romanceMovies`).then((res) => res.json()),
    fetch(`${BASE_URL}/documentaries`).then((res) => res.json()),
  ]);

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
    },
  };
}

export default function Home({
  trendingNow,
  netflixOriginals,
  topRated,
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies,
  documentaries,
}) {
  return (
    <main className="relative">
      <Navbar />
      <section className=" pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Hero netflixOriginals={netflixOriginals} />
      </section>
    </main>
  );
}

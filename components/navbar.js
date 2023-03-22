import React from "react";
import Link from "next/link";
import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";

function Navbar() {
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        isScroll
          ? "flex bg-transparent text-white justify-between p-5"
          : "flex bg-darkGray text-white justify-between p-5"
      }`}
    >
      <section className="flex space-x-6">
        <Link href="/home">
          <img
            src="https://rb.gy/ulxxee"
            width={100}
            height={100}
            className="cursor-pointer object-contain"
          />
        </Link>
        <ul className="hidden md:flex space-x-4 ">
          <Link href="/home">
            <li>Home</li>
          </Link>
          <Link href="/shows">
            <li>Tv Shows</li>
          </Link>
          <Link href="/movies">
            <li>Movies</li>
          </Link>
          <Link href="/new">
            <li>New & Popular</li>
          </Link>
          <Link href="/list">
            <li>My List</li>
          </Link>
        </ul>
      </section>
      <section className="flex space-x-4 items-center">
        <MagnifyingGlassIcon className="sm hidden h-6 w-6 sm:inline" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6" />
        <Link href="/account">
          <img
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
          />
        </Link>
      </section>
    </nav>
  );
}

export default Navbar;

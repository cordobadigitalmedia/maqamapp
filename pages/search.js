import React, { useState, useRef, useEffect } from "react";
import Head from "next/head";
import useSWR from "swr";
import parseMaqams from "@/utils/parseMaqams";
import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";
import Link from "next/link";
import MaqamList from "@/components/MaqamList";
import BreadCrumbLevel1 from "@/components/BreadCrumbsLevel1";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Search() {
  const [maqams, setMaqams] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { data, error } = useSWR(
    "https://maqamappres.vercel.app/json/maqams.json",
    fetcher
  );

  useEffect(() => {
    if (data && searchTerm !== "") {
      const results = parseMaqams(data, "", searchTerm, {});
      console.log(results);
      setMaqams(results);
    } else {
      setMaqams([]);
    }
  }, [searchTerm]);

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";

  const performSearch = (evt) => {
    setSearchTerm(evt.target.value);
  };

  return (
    <div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
      <Head>
        <title>Maqam App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopNav />
      <section className="bg-gray-100 pt-2 pb-0">
        <div className="container mx-auto flex items-center flex-wrap">
          <BreadCrumbLevel1 name="search" />
        </div>
        <div className="container mx-auto flex items-center px-6">
          <input
            type="text"
            class="mt-1 w-full rounded-md bg-gray-200 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
            placeholder="Type to filter maqams"
            onChange={(evt) => performSearch(evt)}
          />
        </div>
        <div className="container mx-auto flex items-center flex-wrap pt-2 pb-2">
          {maqams.length > 0 ? (
            <>
              {" "}
              {maqams.map((maqam) => (
                <MaqamList name="search" maqam={maqam} />
              ))}
            </>
          ) : (
            <div className="p-6">Your search did not return any results</div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

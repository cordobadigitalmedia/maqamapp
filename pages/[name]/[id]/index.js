import React from "react";
import Head from "next/head";
import useSWR from "swr";
import getMaqambyId from "../../../src/utils/getMaqambyId";
import TopNav from "../../../src/components/TopNav";
import Footer from "../../../src/components/Footer";
import Map from "../../../src/components/Map";
import { useRouter } from "next/router";
import Link from "next/link";
import AddFav from "../../../src/components/AddFav";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Maqam() {
  const router = useRouter();
  const { id, name } = router.query;
  console.log(id, name);

  const { data, error } = useSWR(
    "https://maqamappres.vercel.app/json/maqams.json",
    fetcher
  );

  let maqam = {};

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  maqam = getMaqambyId(data, Number(id));
  console.log(maqam);

  return (
    <div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
      <Head>
        <title>Maqam App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopNav />

      {"id" in maqam && (
        <section className="bg-white pt-2 pb-0">
          <div className="container mx-auto flex items-center flex-wrap pt-2 pb-2">
            <nav id="breadcrumb" className="w-full z-30 top-0 px-3 py-1">
              <div className="w-full container mx-auto flex flex-wrap mt-0">
                <Link href="/">
                  <a className="capitalize tracking-wide underline hover:no-underline text-gray-500 text-lg">
                    Home
                  </a>
                </Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 fill-current text-gray-500 hover:text-black mx-1"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
                <Link href={`/${name}`}>
                  <a className="capitalize tracking-wide underline hover:no-underline text-gray-500 text-lg">
                    {name}
                  </a>
                </Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 fill-current text-gray-500 hover:text-black mx-1"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
                <div
                  className="capitalize tracking-wide hover:no-underline text-gray-500 text-lg"
                  href="#"
                >
                  {maqam.name}
                </div>
              </div>
            </nav>

            <div className="w-full flex flex-col p-3">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                    <img
                      className="h-48 w-full object-cover md:h-full md:w-48"
                      src={maqam.photo}
                      alt="Man looking at item at a store"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex">
                      <div className="uppercase tracking-wide text-md text-indigo-500 font-semibold mr-2">
                        {maqam.type}: {maqam.name}
                      </div>
                      <AddFav maqamid={maqam.id}/>
                    </div>
                    <div className="capitalize block mt-1 text-md leading-tight text-gray-400">
                      Located in {maqam.country}
                    </div>
                    <p className="mt-2 text-gray-700">{maqam.description}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full p-3 flex flex-col">
              <Map
                data={{
                  latitude: maqam.latitude,
                  longitude: maqam.longitude,
                  height: "18em",
                }}
              />
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}

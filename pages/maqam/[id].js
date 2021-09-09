import React from "react";
import Head from "next/head";
import useSWR from "swr";
import getMaqambyId from "../../src/utils/getMaqambyId";
import TopNav from "../../src/components/TopNav";
import Footer from "../../src/components/Footer";
import Map from "../../src/components/Map";
import { useRouter } from "next/router";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Maqam() {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

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
            <nav id="store" className="w-full z-30 top-0 px-3 py-1">
              <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
                <a
                  className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl "
                  href="#"
                >
                  {maqam.name}
                </a>
              </div>
            </nav>

            <div className="w-full flex flex-col p-3">
              <div class="bg-white rounded-xl shadow-md overflow-hidden">
                <div class="md:flex">
                  <div class="md:flex-shrink-0">
                    <img
                      class="h-48 w-full object-cover md:h-full md:w-48"
                      src={maqam.photo}
                      alt="Man looking at item at a store"
                    />
                  </div>
                  <div class="p-8">
                    <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    {maqam.type}
                    </div>
                    <a
                      href="#"
                      class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                    >
                       Located in {maqam.country}
                    </a>
                    <p class="mt-2 text-gray-500">{maqam.description}</p>
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

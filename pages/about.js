import Head from "next/head";
import TopNav from "../src/components/TopNav";
import Footer from "../src/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
      <Head>
        <title>Maqam App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopNav />
      <section className="bg-gray-100 pt-2 pb-0">
        <div className="container mx-auto pt-2 pb-4 px-4">
          <div className="font-titleEngAr text-xl mb-1 block">About</div>
          <div className="text-md block font-bold mt-1">
            Definition from Hans Wehr Dictionary
          </div>
          <p className="text-md block">
            <span className="font-titleAr text-xl">مقام</span>: Tomb of a saint,
            sacred place, site, location, place
          </p>
          <div className="text-md block font-bold mt-2">Purpose</div>
          <p className="text-md block">
            This app was designed with the intention of helping you find the
            directions to the tombs of righteous people in Islamic history as
            quickly as possible based on categories or search. We have on
            purpose omitted details and additional media regarding each person
            so that you use the app mainly to find the location and get the
            directions using Google Maps. Once you have reached the area of the
            tomb or the mosque, we recommend switching off your phone or putting
            it in flight mode.
          </p>
          <div className="text-md block font-bold mt-2">Search</div>
          <p className="text-md block">
            You can{" "}
            <Link href="/search">
              <a className="underline">search</a>
            </Link>{" "}
            by the name of the person, his/her type or the country where the
            grave is located in English or by the name of the person in Arabic.
          </p>
          <div className="text-md block font-bold mt-2">Favourites</div>
          <p className="text-md block">
            You can save maqams by using the heart icon and they will be
            available in the{" "}
            <Link href="/favourites">
              <a className="underline">favourites</a>
            </Link>{" "}
            section.
          </p>
          <div className="text-md block font-bold mt-2">Adding New Maqams</div>
          <p className="text-md block">
            You can{" "}
            <Link href="/submit">
              <a className="underline">submit</a>
            </Link>{" "}
            maqams that are not included in this collection or make suggestions
            on existing maqams.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

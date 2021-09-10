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
      <section className="bg-white pt-2 pb-0">
        <div className="container mx-auto flex items-center flex-wrap pt-2 pb-2 px-4">
          <p className="text-md block">
            This app was designed with the intention of helping you find the
            directions to the graves of righteous people in Islamic history as
            quickly as possible based on categories or search. We have on
            purpose omitted details and additional media regarding each person
            so that you use the app ONLY to find the location and get the
            directions from your built-in phone directions app such as Google
            Maps. Once you have reached the area of the tomb or the mosque, we
            recommend switching off your phone or putting it in flight mode.
          </p>
          <p className="text-md block">
            You can search by the name of the person, his/her type or the
            country where the grave is located in English or by the name of the
            person in Arabic.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

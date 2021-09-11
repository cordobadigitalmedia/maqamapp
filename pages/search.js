import Head from "next/head";
import useSWR from "swr";
import parseCategories from "../src/utils/parseCategories";
import TopNav from "../src/components/TopNav";
import Footer from "../src/components/Footer";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Search() {

  return (
    <div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
      <Head>
        <title>Maqam App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopNav />
      <section className="bg-white pt-2 pb-0">
        <div className="container mx-auto flex items-center flex-wrap pt-2 pb-2"></div>
      </section>

      <Footer />
    </div>
  );
}

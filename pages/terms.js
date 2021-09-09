import Head from "next/head";
import TopNav from "../src/components/TopNav";
import Footer from "../src/components/Footer";

export default function Privacy() {
  return (
    <div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
      <Head>
        <title>Maqam App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopNav />
      <section className="bg-white pt-2 pb-0">
        <div className="container mx-auto flex items-center flex-wrap pt-2 pb-2">
          <div className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl">
            Maqam App Terms of Service
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

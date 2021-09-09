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
      <div className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl">
        Maqam App Privacy Policy
      </div>
      <Footer />
    </div>
  );
}

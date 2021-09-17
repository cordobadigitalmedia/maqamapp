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
        <div className="container mx-auto flex items-center flex-wrap pt-2 pb-2 px-4">
          <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script>
          <iframe
            class="airtable-embed airtable-dynamic-height"
            src="https://airtable.com/embed/shrUFfe4R6r0opBft?backgroundColor=gray"
            frameborder="0"
            onmousewheel=""
            width="100%"
            height="1988"
          ></iframe>
        </div>
      </section>

      <Footer />
    </div>
  );
}

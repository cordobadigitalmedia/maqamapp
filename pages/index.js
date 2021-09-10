import Head from "next/head";
import useSWR from "swr";
import parseCategories from "../src/utils/parseCategories";
import TopNav from "../src/components/TopNav";
import Footer from "../src/components/Footer";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error } = useSWR(
    "https://maqamappres.vercel.app/json/categories.json",
    fetcher
  );
  let categories = [];

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  categories = parseCategories(data);
  console.log(categories);

  return (
    <div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
      <Head>
        <title>Maqam App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopNav />

      {categories.length > 0 &&
        categories.map((cat, i) => (
          <section className="bg-white pt-2 pb-0">
            <div className="container mx-auto flex items-center flex-wrap pt-2 pb-2">
              <nav id="store" className="w-full z-30 top-0 px-6 py-1">
                <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
                  <a
                    className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl "
                    href="#"
                  >
                    By {cat[0].cat}
                  </a>
                </div>
              </nav>
              {cat.map((catitem) => (
                <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
                  <Link href={`/${catitem.name.toLowerCase()}`}>
                    <a>
                      <img
                        className="object-cover md:h-48 xl:h-64 w-full hover:grow hover:shadow-lg"
                        src={catitem.url}
                      />
                      <div className="pt-3 flex items-center justify-between">
                        <p className="">{catitem.name}</p>
                      </div>
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        ))}

      <Footer />
    </div>
  );
}

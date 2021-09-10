import Head from "next/head";
import useSWR from "swr";
import parseMaqams from "../../src/utils/parseMaqams";
import TopNav from "../../src/components/TopNav";
import Footer from "../../src/components/Footer";
import Link from "next/link";
import { useRouter } from "next/router";
import AddFav from "../../src/components/AddFav";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function MaqamList() {
  const router = useRouter();
  const { name } = router.query;
  console.log(name);
  const { data, error } = useSWR(
    "https://maqamappres.vercel.app/json/maqams.json",
    fetcher
  );
  let maqams = [];

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  maqams = parseMaqams(data, name, "", {});
  console.log(maqams);

  return (
    <div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
      <Head>
        <title>Maqam App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopNav />

      <section className="bg-white pt-2 pb-0">
        <div className="container mx-auto flex items-center flex-wrap pt-2 pb-2">
          <nav id="breadcrumb" className="w-full z-30 top-0 px-6 py-1">
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
              <div
                className="capitalize tracking-wide hover:no-underline text-gray-500 text-lg"
                href="#"
              >
                {`${name}`}
              </div>
            </div>
          </nav>
          {maqams.map((maqam) => (
            <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
              <Link href={`/${name}/${maqam.id}`}>
                <a>
                  <img
                    className="object-cover md:h-48 xl:h-64 w-full hover:grow hover:shadow-lg"
                    src={maqam.avatar}
                  />
                </a>
              </Link>
              <div className="pt-3 flex items-center justify-between">
                <p className="">{maqam.name}</p>
                <AddFav maqamid={maqam.id} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

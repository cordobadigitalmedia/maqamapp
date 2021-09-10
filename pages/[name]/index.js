import Head from "next/head";
import useSWR from "swr";
import parseMaqams from "../../src/utils/parseMaqams";
import TopNav from "../../src/components/TopNav";
import Footer from "../../src/components/Footer";
import Link from "next/link";
import { useRouter } from "next/router";

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
                  <div className="pt-3 flex items-center justify-between">
                    <p className="">{maqam.name}</p>
                    <svg
                      className="h-6 w-6 fill-current text-gray-500 hover:text-black"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                    </svg>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

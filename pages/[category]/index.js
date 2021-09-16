import Head from "next/head";
import useSWR from "swr";
import parseMaqams from "@/utils/parseMaqams";
import Link from "next/link";
import { useRouter } from "next/router";
import MaqamList from "@/components/MaqamList";
import Footer from "@/components/Footer";
import TopNav from "@/components/TopNav";
import BreadCrumbLevel1 from "@/components/BreadCrumbsLevel1";
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Maqams() {
  const router = useRouter();
  const { category } = router.query;
  const { data, error } = useSWR(
    "https://maqamappres.vercel.app/json/maqams.json",
    fetcher
  );
  let maqams = [];

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  maqams = parseMaqams(data, category, "", {});
  console.log(maqams);

  return (
    <div className="text-gray-600 work-sans leading-normal text-base tracking-normal">
      <Head>
        <title>Maqam App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopNav />

      <section className="bg-gray-100 pt-2 pb-0">
        <div className="container mx-auto flex items-center flex-wrap pt-2 pb-2">
          <BreadCrumbLevel1 name={category} />
          {maqams.map((maqam) => (
            <MaqamList name={category} maqam={maqam} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

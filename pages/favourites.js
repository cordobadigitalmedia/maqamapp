import Head from "next/head";
import useSWR from "swr";
import parseCategories from "@/utils/parseCategories";
import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";
import Link from "next/link";
import getMaqambyIds from "@/utils/getMaqambyIds";
import MaqamList from "@/components/MaqamList";
import { useSelector, useDispatch } from "react-redux";
import { updateFavourites, selectFav } from "@/store/favDataSlice";
import BreadCrumbLevel1 from "@/components/BreadCrumbsLevel1";

const fetcher = (url) => fetch(url).then((res) => res.json());

Object.filter = (obj, predicate) =>
  Object.keys(obj)
    .filter((key) => predicate(obj[key]))
    .reduce((res, key) => ((res[key] = obj[key]), res), {});

export default function Favourites() {
  const favourites = useSelector(selectFav);
  console.log(favourites);
  let savedFavs = [];
  if (Object.keys(favourites).length > 0) {
    savedFavs = Object.keys(Object.filter(favourites, (fav) => fav === true))
      .filter((fav) => fav !== "undefined")
      .map((fav) => Number(fav));
  }

  const { data, error } = useSWR(
    "https://maqamappres.vercel.app/json/maqams.json",
    fetcher
  );

  let maqams = [];

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";

  if (savedFavs.length > 0) {
    maqams = getMaqambyIds(data, savedFavs);
  }

  return (
    <div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
      <Head>
        <title>Maqam App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopNav />
      <section className="bg-white pt-2 pb-0">
        <div className="container mx-auto flex items-center flex-wrap pt-2 pb-2">
          <BreadCrumbLevel1 name="favourites" />
          {maqams.length > 0 ? (
            <div>
              {" "}
              {maqams.map((maqam) => (
                <MaqamList name="favourites" maqam={maqam} />
              ))}
            </div>
          ) : (
            <div>You have no saved favourites</div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

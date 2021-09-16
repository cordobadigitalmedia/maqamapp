import Link from "next/link";
import AddFav from "@/components/AddFav";

export default function MaqamList({ name, maqam }) {
  return (
    <div className="w-full md:w-1/3 xl:w-1/4 p-3 m-3 flex flex-col h-full bg-white shadow-lg rounded-tl-full rounded-tr-full">
      <Link href={`/${name}/${maqam.id}`}>
        <a>
          <img
            className="object-cover md:h-48 xl:h-64 w-full hover:grow hover:shadow-lg rounded-tl-full rounded-tr-full"
            src={maqam.avatar}
          />
        </a>
      </Link>
      <div>
        <p className="font-titleArabic text-l truncate text-center pt-1">{maqam.nameAr}</p>
      </div>
      <div className="flex">
        <p className="font-titleEngAr truncate self-stretch flex-grow">{maqam.name}</p>
        <AddFav maqamid={maqam.id}/>
      </div>
    </div>
  );
}

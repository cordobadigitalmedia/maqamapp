import Link from "next/link"; 
import AddFav from "@/components/AddFav";

export default function MaqamList({ name, maqam }) {
  return (
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
  );
}

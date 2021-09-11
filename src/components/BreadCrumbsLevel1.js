import Link from "next/link";

export default function BreadCrumbLevel1({name}) {
  return (
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
  );
}

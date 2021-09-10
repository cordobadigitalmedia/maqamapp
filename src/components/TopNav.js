import Link from "next/link";

export default function TopNav() {
  return (
    <nav id="header" className="w-full z-30 top-0 py-1">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
        <label for="menu-toggle" className="cursor-pointer md:hidden block">
          <svg
            className="fill-current text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>

        <div
          className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1"
          id="menu"
        >
          <nav>
            <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
              <li>
                <Link href="/about">
                  <a className="inline-block no-underline hover:text-black hover:underline py-2 px-4">
                    About
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="order-1 md:order-2">
          <Link href="/">
            <a className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl ">
              <img className="w-8 mr-1" src="/icon.png" />
              MAQAM APP
            </a>
          </Link>
        </div>

        <div className="order-2 md:order-3 flex items-center" id="nav-content">
          <a className="inline-block no-underline hover:text-black" href="#">
            <svg
              className="fill-current hover:text-black"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}

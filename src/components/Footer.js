import Link from "next/link";
export default function Footer() {
  return (
    <footer className="container mx-auto bg-white py-8 border-t border-gray-400">
      <div className="flex flex-wrap mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400 ml-3">
        <div>
          <Link href="/">
            <a className="underline">Maqam App</a>
          </Link>
        </div>
        <div>{`•`}</div>
        <div>{`© ${new Date().getFullYear()}`}</div>
        <div>{`• Powered by`}</div>
        <Link href="https://www.vercel.com">
          <a className="underline">Vercel</a>
        </Link>
        <div>{`• Built with`}</div>
        <Link href="https://www.nextjs.org">
          <a className="underline">NextJS</a>
        </Link>
        <div>{`&`}</div>
        <Link href="https://www.tailwindcss.com">
          <a className="underline">Tailwind CSS</a>
        </Link>
      </div>
    </footer>
  );
}

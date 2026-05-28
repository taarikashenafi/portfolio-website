import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative bg-bg-dark flex justify-center items-center flex-col min-h-screen mx-auto sm:px-10 px-5">
      <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">404</h1>
      <p className="text-white-200 text-lg md:text-2xl mb-8">
        Page not found
      </p>
      <Link
        href="/"
        className="text-[#E33333] hover:underline text-lg"
      >
        Return home
      </Link>
    </main>
  );
}

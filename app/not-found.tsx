import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative bg-bg-dark flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 min-h-screen">
      <div className="text-center">
        <h1 className="text-white text-6xl md:text-9xl font-bold">404</h1>
        <p className="text-white-200 text-lg md:text-2xl mt-6">
          Page not found
        </p>
        <Link
          href="/"
          className="inline-block mt-8 px-6 py-3 text-white border border-white rounded-lg hover:bg-white hover:text-black transition-colors"
        >
          Go back home
        </Link>
      </div>
    </main>
  );
}

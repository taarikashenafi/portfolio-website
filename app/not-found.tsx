import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-bg-dark text-white px-5">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-white-200 text-lg mb-8">Page not found</p>
      <Link
        href="/"
        className="text-[#E33333] underline hover:opacity-80 transition-opacity"
      >
        Return Home
      </Link>
    </main>
  );
}

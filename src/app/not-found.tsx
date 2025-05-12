import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: "Oops! The page you're looking for doesn't seem to exist.",
};

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col gap-4 items-center justify-center md:flex-row p-4 md:p-8">
      <span className="flex flex-col md:items-start items-center justify-center">
        <h1 className="mb-3 text-7xl font-bold text-gray-800 dark:text-gray-100 md:text-6xl">
          404
        </h1>

        <h2 className="mb-5 text-xl text-center font-semibold text-gray-700 dark:text-gray-300 md:text-start md:text-2xl">
          Je nám ľúto, ale požadovaná stránka nebola nájdená
        </h2>
      </span>

      <Image
        className="mb-5 h-auto w-full max-w-[500px] max-h-[500px]"
        src="/not_found.webp"
        alt="404 not found"
        width={400}
        height={400}
      />
    </main>
  );
}

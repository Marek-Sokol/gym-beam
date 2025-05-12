import Image from 'next/image';
import Link from 'next/link';

export function MainHeader({ children }: { children?: React.ReactNode }) {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4 py-4 sm:px-6 lg:px-8">
      <Link href="/" className="flex items-center">
        <Image
          className="dark:invert dark:hue-rotate-180"
          src="/gbLogo.webp"
          alt="GymBeam logo"
          width={200}
          height={100}
          priority
        />
      </Link>

      <div className="flex items-center gap-4">{children}</div>
    </header>
  );
}

import { ThemeSwitcher } from 'components/UIElements';

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="p-5 w-full">
      <div className="flex items-center justify-between m-auto">
        <h2 className="font-bold text-xl text-headline-light dark:text-headline-dark">
          <Link href="/">
            <a className="text-3xl sm:text-4xl tracking-wide font-racing text-headline-light dark:text-headline-dark">
              Agk
            </a>
          </Link>
        </h2>

        <div>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

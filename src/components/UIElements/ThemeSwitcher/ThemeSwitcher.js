import { MoonIcon, SunIcon } from '@heroicons/react/solid';

const ThemeSwitcher = ({ theme, themeSwitcher }) => {
  return (
    <button
      aria-label={
        theme === 'dark' ? 'Activate light mode' : 'Activate Dark mode'
      }
      onClick={themeSwitcher}
      tabIndex="0"
    >
      {theme === 'dark' ? (
        <MoonIcon className="w-5 h-5 text-headline-light dark:text-headline-dark transition duration-150 ease-in-out transform hover:-rotate-12" />
      ) : (
        <SunIcon className="w-5 h-5 text-headline-light dark:text-headline-dark transition duration-150 ease-in-out transform hover:-rotate-12" />
      )}
    </button>
  );
};

export default ThemeSwitcher;

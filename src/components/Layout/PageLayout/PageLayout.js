import SEO from 'components/SEO/SEO';
import { Navbar } from 'components/Layout';

import Image from 'next/image';

const PageLayout = ({ children, pageTitle, pageDescription, pageUrl }) => {
  return (
    <div className="relative bg-background-light dark:bg-background-dark min-h-screen">
      <SEO
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        pageUrl={pageUrl}
      />

      {/* <header className="sticky top-0 z-10 bg-navBg-light dark:bg-navBg-dark backdrop-blur"> */}
      <header className="sticky top-0 z-10">
        <Navbar />
      </header>

      <div>
        <Image
          src="/bg-dark-2.jpg"
          layout="fill"
          className="absolute w-full h-full bg-cover opacity-20 inset-0"
          alt="gradient background"
        />
      </div>

      <main className="absolute w-full px-5 font-spaceG text-headline-light dark:text-headline-dark">
        {children}
      </main>
    </div>
  );
};

export default PageLayout;

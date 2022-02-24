import { PageLayout } from 'components/Layout';
import { ReactLogo, NextLogo, TailwindLogo } from 'components/Icons';
import { Carousel } from 'components/UIElements';

export default function Home() {
  return (
    <PageLayout
      pageTitle="Ahmed Agk | Front-end Web Developer"
      pageDescription="I create fast, maintainable and great-looking web apps."
      pageUrl="agktf.com"
    >
      <section className="my-16 w-full text-center">
        <h1 className="font-bold text-2xl tracking-wide">
          Hello, I&#39;m Ahmed
        </h1>

        <p className="font-normal text-sm">Front-end web developer</p>
      </section>

      <div className="space-y-10">
        <section>
          <h2 className="font-semibold text-lg">Who am I?</h2>
          <p className="mt-1 font-medium text-sm">
            I&#39;m a front-end web developer based in Cairo, Egypt.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-lg">What do I do?</h2>
          <p className="mt-1 font-normal text-sm">
            I create fast, maintainable and great-looking web apps.
            <br />
            I&#39;m currently using the following technologies:
          </p>

          <div className="mt-4 flex justify-center items-center gap-6">
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
              <ReactLogo />
            </a>
            <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
              <NextLogo />
            </a>
            <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
              <TailwindLogo />
            </a>
          </div>
        </section>

        <section>
          <h2 className="font-semibold text-lg">Latest Projects</h2>

          <Carousel />
        </section>
      </div>
    </PageLayout>
  );
}

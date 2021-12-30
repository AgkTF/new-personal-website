import { PageLayout } from 'components/Layout';
import { ReactLogo, NextLogo, TailwindLogo } from 'components/Icons';

export default function Home() {
  return (
    <PageLayout
      pageTitle="Ahmed (agk) | Front-end Web Developer"
      pageDescription="I create fast, maintainable and great-looking web apps."
      pageUrl="agktf.com"
    >
      <section className="my-16 w-full text-center">
        <h1 className="font-bold text-2xl tracking-wide">
          Hello, I&#39;m Ahmed
        </h1>

        <p className="font-light text-sm">Front-end web developer</p>
      </section>

      <div className="space-y-10">
        <section>
          <h2 className="font-semibold text-lg">Who am I?</h2>
          <p className="mt-1 font-normal text-sm">
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
            <ReactLogo />
            <NextLogo />
            <TailwindLogo />
          </div>
        </section>

        <section>
          <h2 className="font-semibold text-lg">Latest Projects</h2>
        </section>
      </div>
    </PageLayout>
  );
}

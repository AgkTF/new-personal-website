import { PageLayout } from 'components/Layout';

export default function Home() {
  return (
    <PageLayout
      pageTitle="Ahmed (agk) | Front-end Web Developer"
      pageDescription="I create fast, maintainable and great-looking web apps."
      pageUrl="agktf.com"
    >
      <section className="my-9 w-full text-center">
        <h1 className="font-bold text-xl tracking-wide">
          Hello, I&#39;m Ahmed
        </h1>

        <p className="font-light text-xs">Front-end web developer</p>
      </section>

      <div className="space-y-7">
        <section>
          <h2 className="font-semibold text-base">Who am I?</h2>
          <p className="mt-1 font-normal text-xs">
            I&#39;m a front-end web developer based in Cairo, Egypt.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-base">What do I do?</h2>
          <p className="mt-1 font-normal text-xs">
            I create fast, maintainable and great-looking web apps.
            <br />
            I&#39;m currently using the following technologies:
          </p>
        </section>
      </div>
    </PageLayout>
  );
}

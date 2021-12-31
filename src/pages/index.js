import { PageLayout } from 'components/Layout';
import { ReactLogo, NextLogo, TailwindLogo } from 'components/Icons';

import Image from 'next/image';

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

          <div className="mt-3 flex gap-4 scroll-smooth snap-x max-w-full overflow-x-auto">
            <div className="relative w-64 h-36 flex-shrink-0 snap-center">
              <Image
                alt="project 1"
                src="/1.png"
                layout="fill"
                className="object-cover rounded-md shadow-md w-full h-full"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAL0lEQVQImWNgYZUoLC4tTIxUZmdgqCqu/////+e75zKZDBlMTU1z8wpyE5IUGPgADMQNuu/bx/YAAAAASUVORK5CYII="
              />
            </div>
            <div className="relative w-64 h-36 flex-shrink-0 snap-center">
              <Image
                alt="project 1"
                src="/2.png"
                layout="fill"
                className="object-cover rounded-md shadow-md w-full h-full"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAMklEQVQImQEnANj/ALe1voqLmbaxtODU0QCDfY4RABY/Ljbq5OIA4uHkwsXNp6mz/v//rTQXe3xE0LIAAAAASUVORK5CYII="
              />
            </div>
            <div className="relative w-64 h-36 flex-shrink-0 snap-center">
              <Image
                alt="project 1"
                src="/3.png"
                layout="fill"
                className="object-cover rounded-md shadow-md w-full h-full"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVQImQEnANj/AOTSzdfXy+Tl1v///QDk5OSjm4dsWEl8goQAeHh0eHNwSkZIAAIDA6cVMy5gNfMAAAAASUVORK5CYII="
              />
            </div>
            <div className="relative w-64 h-36 flex-shrink-0 snap-center">
              <Image
                alt="project 1"
                src="/4.png"
                layout="fill"
                className="object-cover rounded-md shadow-md w-full h-full"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVQImQEnANj/AAoOGKessnqOlkVibgAAAA7///+FlJUTIigAHyMny87RkZOWYGFmIhcPs1pokPUAAAAASUVORK5CYII="
              />
            </div>
            <div className="relative w-64 h-36 flex-shrink-0 snap-center">
              <Image
                alt="project 1"
                src="/1.png"
                layout="fill"
                className="object-cover rounded-md shadow-md w-full h-full"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAL0lEQVQImWNgYZUoLC4tTIxUZmdgqCqu/////+e75zKZDBlMTU1z8wpyE5IUGPgADMQNuu/bx/YAAAAASUVORK5CYII="
              />
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}

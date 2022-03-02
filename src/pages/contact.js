import { PageLayout } from 'components/Layout';
import { ContactIcon, GitHubIcon, TwitterIcon } from 'components/Icons';

import { PhoneIcon } from '@heroicons/react/solid';

export default function Contact() {
  return (
    <PageLayout
      pageTitle="Ahmed Agk | Contact me"
      pageDescription="let's talk!"
      pageUrl="agktf.com/contact"
    >
      <section className="my-16 w-full text-center">
        <h1 className="font-bold text-2xl tracking-wide">Let&#39;s Talk</h1>

        <p className="mt-4 font-normal text-sm text-justify">
          If you&#39;re interested to talk to me about web development or
          propose an opportunity to work together on something or just want to
          say hi, you can reach me through any of the following channels.
        </p>

        <div className="mx-auto mt-6 flex flex-col gap-4 justify-center items-start w-max">
          <div className="flex gap-2 items-center justify-center hover:text-link-light">
            <TwitterIcon className="h-5 w-5" />
            <a
              href="https://twitter.com/agkTF"
              target="_blank"
              rel="noreferrer"
            >
              @agkTF
            </a>
          </div>

          <div className="flex gap-2 items-center justify-center hover:text-tertiary-light hover:dark:text-tertiary-dark">
            <ContactIcon className="h-5 w-5" />
            <a href="mailto:ahmed.agk22@gmail.com">ahmed.agk22@gmail.com</a>
          </div>

          <div className="flex gap-2 items-center justify-center hover:text-black hover:dark:text-slate-300">
            <GitHubIcon className="h-5 w-5" />
            <a href="https://github.com/AgkTF" target="_blank" rel="noreferrer">
              github.com/AgkTF
            </a>
          </div>

          <div className="flex gap-2 items-center justify-center">
            <PhoneIcon className="h-5 w-5" />
            <p>available upon request</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

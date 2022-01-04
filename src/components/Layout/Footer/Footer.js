import { FooterIcon } from 'components/UIElements';
import {
  ContactIcon,
  GitHubIcon,
  HomeIcon,
  PenIcon,
  ProjectsIcon,
} from 'components/Icons';

import Link from 'next/link';

const Footer = () => {
  return (
    <div className="pt-1 px-5 flex justify-between gap-12 items-center bg-slate-300 dark:bg-background-light/30 rounded-xl">
      <Link href="/">
        <a>
          <FooterIcon
            textClass="text-cardBg-light"
            bgClass="bg-cardBg-dark"
            icon={<HomeIcon className="h-5 w-5" />}
            title="Home"
          />
        </a>
      </Link>

      <a href="https://blog.agktf.com" target="_blank" rel="noreferrer">
        <FooterIcon
          textClass="text-[#F2F4FC]"
          bgClass="bg-paragraph-dark"
          icon={<PenIcon className="h-5 w-5" />}
          title="Blog"
        />
      </a>

      <FooterIcon
        textClass="text-tertiary-dark"
        bgClass="bg-tertiary-light"
        icon={<ProjectsIcon className="h-5 w-5" />}
        title="Projects"
      />

      <Link href="/contact">
        <a>
          <FooterIcon
            textClass="text-[#EDF7FE]"
            bgClass="bg-link-light"
            icon={<ContactIcon className="h-5 w-5" />}
            title="Contact"
          />
        </a>
      </Link>

      <a href="https://github.com/AgkTF" target="_blank" rel="noreferrer">
        <FooterIcon
          textClass="text-black"
          bgClass="bg-slate-200"
          icon={<GitHubIcon className="h-5 w-5" />}
          title="GitHub"
        />
      </a>
    </div>
  );
};

export default Footer;

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
    <div className="pt-1 px-5 flex justify-between gap-7 sm:gap-12 items-center bg-slate-300 dark:bg-background-light/30 rounded-xl">
      <Link href="/">
        <a>
          <FooterIcon
            textClass="text-cardBg-dark group-hover:text-slate-50"
            bgClass="bg-slate-50 group-hover:bg-cardBg-dark"
            icon={<HomeIcon className="h-4 w-4" />}
            title="Home"
          />
        </a>
      </Link>

      <a href="https://blog.agktf.com" target="_blank" rel="noreferrer">
        <FooterIcon
          textClass="text-paragraph-light group-hover:text-slate-50"
          bgClass="bg-slate-50 group-hover:bg-paragraph-light"
          icon={<PenIcon className="h-5 w-5" />}
          title="Blog"
        />
      </a>

      <FooterIcon
        textClass="text-tertiary-light group-hover:text-slate-50"
        bgClass="bg-slate-50 group-hover:bg-tertiary-light"
        icon={<ProjectsIcon className="h-5 w-5" />}
        title="Projects"
      />

      <Link href="/contact">
        <a>
          <FooterIcon
            textClass="text-link-light group-hover:text-slate-50"
            bgClass="bg-slate-50 group-hover:bg-link-light"
            icon={<ContactIcon className="h-5 w-5" />}
            title="Contact"
          />
        </a>
      </Link>

      <a href="https://github.com/AgkTF" target="_blank" rel="noreferrer">
        <FooterIcon
          textClass="text-black group-hover:text-slate-50"
          bgClass="bg-slate-50 group-hover:bg-black"
          icon={<GitHubIcon className="h-5 w-5" />}
          title="GitHub"
        />
      </a>
    </div>
  );
};

export default Footer;

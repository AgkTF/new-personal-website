import { FooterIcon } from 'components/UIElements';
import {
  ContactIcon,
  GitHubIcon,
  PenIcon,
  ProjectsIcon,
} from 'components/Icons';

const Footer = () => {
  return (
    <div className="pt-1 px-5 flex justify-between gap-12 items-center bg-background-dark/30 dark:bg-background-light/30 rounded-xl">
      <FooterIcon
        textClass="text-[#F2F4FC]"
        bgClass="bg-paragraph-dark"
        icon={<PenIcon />}
        title="Blog"
      />

      <FooterIcon
        textClass="text-tertiary-dark"
        bgClass="bg-tertiary-light"
        icon={<ProjectsIcon />}
        title="Projects"
      />

      <FooterIcon
        textClass="text-[#EDF7FE]"
        bgClass="bg-link-light"
        icon={<ContactIcon />}
        title="Contact"
      />

      <FooterIcon
        textClass="text-black"
        bgClass="bg-slate-200"
        icon={<GitHubIcon />}
        title="GitHub"
      />
    </div>
  );
};

export default Footer;

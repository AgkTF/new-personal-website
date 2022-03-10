import { useState, useEffect, useContext } from 'react';

import { GitHubIcon, OutlinedGitHubIcon } from 'components/Icons';
import { projects } from 'utils/data';

import { CarouselContext } from 'pure-react-carousel';
import { ExternalLinkIcon } from '@heroicons/react/outline';

const ProjectDetailsSection = () => {
  const carouselContext = useContext(CarouselContext);
  const [currentSlide, setCurrentSlide] = useState(
    carouselContext.state.currentSlide
  );

  useEffect(() => {
    function onChange() {
      setCurrentSlide(carouselContext.state.currentSlide);
    }
    carouselContext.subscribe(onChange);
    return () => carouselContext.unsubscribe(onChange);
  }, [carouselContext]);

  return (
    <section className="w-full">
      <div className="w-full flex items-center justify-between">
        <h2 className="font-bold text-xl tracking-wide">
          {projects[currentSlide].name}
        </h2>

        <div className="max-w-max flex items-center justify-center gap-5">
          <a href={projects[currentSlide].liveLink}>
            <ExternalLinkIcon className="h-6 w-6 text-link-light" />
          </a>

          <a href={projects[currentSlide].repoLink}>
            <OutlinedGitHubIcon className="h-6 w-6 text-link-light" />
          </a>
        </div>
      </div>

      <p className="mt-4 text-sm text-justify whitespace-pre-line">
        {projects[currentSlide].brief}
      </p>

      <section className="mt-4">
        <h3 className="text-justify text-xs text-reddish font-semibold">
          Technologies used:
        </h3>
        <p className="mt-1 w-full flex items-center gap-5">
          {projects[currentSlide].techStack.map((t, i) => (
            <span key={i} className="text-sm">
              {t}
            </span>
          ))}
        </p>
      </section>
    </section>
  );
};

export default ProjectDetailsSection;

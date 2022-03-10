import ProjectCard from '../ProjectCard/ProjectCard';

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/outline';
import ProjectDetailsSection from '../ProjectDetailsSection/ProjectDetailsSection';

const ProjectsCarousel2 = ({ projects }) => {
  return (
    <div className="relative">
      <CarouselProvider
        isIntrinsicHeight
        naturalSlideWidth={256}
        totalSlides={projects.length}
        visibleSlides={1}
        infinite
      >
        <Slider className="px-0 xs:px-[19%] sm:px-[25%] md:px-[32%] lg:px-[36%] xl:px-[39%]">
          {projects.map((pr, i) => (
            <Slide key={i} index={i}>
              <ProjectCard index={i} name={pr.name} cover={pr.cover} />
            </Slide>
          ))}
        </Slider>

        <div className="absolute top-1/4 w-full flex items-center justify-between">
          <ButtonBack className="p-2 rounded-full text-paragraph-light dark:text-paragraph-dark bg-cardBg-light dark:bg-cardBg-dark">
            <ArrowLeftIcon className="h-5 w-5" />
          </ButtonBack>

          <ButtonNext className="p-2 rounded-full text-paragraph-light dark:text-paragraph-dark bg-cardBg-light dark:bg-cardBg-dark">
            <ArrowRightIcon className="h-5 w-5" />
          </ButtonNext>
        </div>

        <div className="mt-10">
          <ProjectDetailsSection />
        </div>
      </CarouselProvider>
    </div>
  );
};

export default ProjectsCarousel2;

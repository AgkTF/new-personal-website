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

const ProjectsCarousel2 = ({ projects }) => {
  return (
    <div className="relative">
      <CarouselProvider
        // naturalSlideHeight={144}
        isIntrinsicHeight
        naturalSlideWidth={256}
        totalSlides={projects.length}
        visibleSlides={1}
        infinite
      >
        <Slider>
          {projects.map((pr, i) => (
            <Slide key={i} index={i}>
              <ProjectCard id={pr.id} name={pr.name} cover={pr.cover} />
            </Slide>
          ))}
        </Slider>

        <div className="absolute top-[45%] w-full flex items-center justify-between">
          <ButtonBack className="p-2 rounded-full text-paragraph-light dark:text-paragraph-dark bg-cardBg-light dark:bg-cardBg-dark">
            <ArrowLeftIcon className="h-5 w-5" />
          </ButtonBack>

          <ButtonNext className="p-2 rounded-full text-paragraph-light dark:text-paragraph-dark bg-cardBg-light dark:bg-cardBg-dark">
            <ArrowRightIcon className="h-5 w-5" />
          </ButtonNext>
        </div>
      </CarouselProvider>
    </div>
  );
};

export default ProjectsCarousel2;

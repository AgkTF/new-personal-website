import { useState, useEffect, useContext } from 'react';

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
import useResizeObserver from 'use-resize-observer';

const ProjectsCarousel2 = ({ projects }) => {
  const { ref, width } = useResizeObserver();
  const [visibleSlides, setVisibleSlides] = useState(1);

  useEffect(() => {
    if (visibleSlides !== 1 && width >= 350 && width < 570) {
      console.log(' 1 slide ');
      setVisibleSlides(1);
    } else if (visibleSlides !== 2 && width >= 570 && width < 850) {
      console.log(' 2 slides ');
      setVisibleSlides(2);
    } else if (visibleSlides !== 3 && width >= 850 && width < 1120) {
      console.log(' 3 slides ');
      setVisibleSlides(3);
    } else if (visibleSlides !== 4 && width >= 1120 && width < 1365) {
      console.log(' 4 slides ');
      setVisibleSlides(4);
    } else if (visibleSlides !== 5 && width >= 1365) {
      console.log(' 5 slides ');
      setVisibleSlides(5);
    }
  }, [width, visibleSlides]);

  return (
    <div className="relative" ref={ref}>
      <CarouselProvider
        isIntrinsicHeight
        naturalSlideWidth={256}
        totalSlides={projects.length}
        visibleSlides={visibleSlides}
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

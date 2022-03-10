import { useState, useEffect, useContext } from 'react';

import { projects } from 'utils/data';

import { CarouselContext } from 'pure-react-carousel';

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
      <h2 className="font-bold text-xl tracking-wide">
        {projects[currentSlide].name}
      </h2>

      <p className=""></p>
    </section>
  );
};

export default ProjectDetailsSection;

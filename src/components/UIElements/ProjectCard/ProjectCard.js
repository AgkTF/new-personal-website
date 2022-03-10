import { useState, useEffect, useContext } from 'react';

import Image from 'next/image';
import { CarouselContext } from 'pure-react-carousel';

const ProjectCard = ({ cover, name }) => {
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
    <button
      type="button"
      className="relative w-64 h-36 flex-shrink-0 opacity-50"
    >
      <Image
        alt={name}
        src={cover}
        layout="fill"
        className={`object-cover cover object-top rounded-xl shadow-md w-full h-full`}
      />
    </button>
  );
};

export default ProjectCard;

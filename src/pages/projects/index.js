import { useState, useEffect, useContext } from 'react';

import { PageLayout } from 'components/Layout';
import { ProjectsCarousel, ProjectsCarousel2 } from 'components/UIElements';

import { projects } from 'utils/data';

import { CarouselContext } from 'pure-react-carousel';

export default function ProjectsPage() {
  // const carouselContext = useContext(CarouselContext);
  // const [currentSlide, setCurrentSlide] = useState(
  //   carouselContext.state.currentSlide
  // );
  const [projectDetails, setProjectDetails] = useState({});

  // useEffect(() => {
  //   console.log(' 🛀 ');
  //   const selectedProject = projects.find(pr => pr.id === selectedCard);

  //   setProjectDetails(selectedProject);
  // }, [selectedCard]);

  // useEffect(() => {
  //   function onChange() {
  //     setCurrentSlide(carouselContext.state.currentSlide);
  //     setProjectDetails(projects[carouselContext.state.currentSlide]);
  //   }
  //   carouselContext.subscribe(onChange);
  //   return () => carouselContext.unsubscribe(onChange);
  // }, [carouselContext]);

  return (
    <PageLayout
      pageTitle="Ahmed Agk | Latest Project 🚀"
      pageDescription="Latest projects created by AgkTF."
      pageUrl="agktf.com/projects"
    >
      <section className="mt-16 mb-8 w-full text-center">
        <h1 className="font-bold text-2xl tracking-wide">Latest Projects</h1>

        <div className="mt-5">
          <ProjectsCarousel2 projects={projects} />
        </div>
      </section>

      <section className="w-full">
        <h2 className="font-bold text-xl tracking-wide">
          {projectDetails.name}
        </h2>

        <p className=""></p>
      </section>
    </PageLayout>
  );
}

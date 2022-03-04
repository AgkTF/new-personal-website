import { useState, useEffect } from 'react';

import { PageLayout } from 'components/Layout';
import { ProjectsCarousel } from 'components/UIElements';

import { projects } from 'utils/data';

export default function ProjectsPage() {
  const [selectedCard, setSelectedCard] = useState(2);
  const [projectDetails, setProjectDetails] = useState({});

  useEffect(() => {
    console.log(' 🛀 ');
    const selectedProject = projects.find(pr => pr.id === selectedCard);

    setProjectDetails(selectedProject);
  }, [selectedCard]);

  return (
    <PageLayout
      pageTitle="Ahmed Agk | Latest Project 🚀"
      pageDescription="Latest projects created by AgkTF."
      pageUrl="agktf.com/projects"
    >
      <section className="mt-16 mb-8 w-full text-center">
        <h1 className="font-bold text-2xl tracking-wide">Latest Projects</h1>

        <div className="mt-5">
          <ProjectsCarousel
            projects={projects}
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
          />
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

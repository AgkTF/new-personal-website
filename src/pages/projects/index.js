import { PageLayout } from 'components/Layout';
import { ProjectsCarousel2 } from 'components/UIElements';

import { projects } from 'utils/data';

export default function ProjectsPage() {
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
    </PageLayout>
  );
}

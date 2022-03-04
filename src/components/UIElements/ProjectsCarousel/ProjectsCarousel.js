import { ProjectCard } from 'components/UIElements';

import * as ScrollArea from '@radix-ui/react-scroll-area';

function ProjectsCarousel({ projects, selectedCard, setSelectedCard }) {
  return (
    <ScrollArea.Root type="hover">
      <ScrollArea.Viewport className="scroll-smooth snap-x">
        <div className="px-4 py-2 pb-6 mt-3 flex gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              id={project.id}
              name={project.name}
              cover={project.cover}
              selectedCard={selectedCard}
              setSelectedCard={setSelectedCard}
            />
          ))}
        </div>
      </ScrollArea.Viewport>

      <ScrollArea.Scrollbar
        orientation="horizontal"
        className="p-[2px] flex flex-col h-[10px] select-none touch-none dark:bg-slate-50/25 bg-slate-600/25 rounded-full transition-colors ease-out"
      >
        <ScrollArea.Thumb className="radix__thumb relative flex-1 bg-paragraph-light dark:bg-tertiary-light rounded-full" />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  );
}

export default ProjectsCarousel;

import { ProjectCard } from 'components/UIElements';

import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/outline';
import * as ScrollArea from '@radix-ui/react-scroll-area';

function ProjectsCarousel({ projects, selectedCard, setSelectedCard }) {
  return (
    <div className="relative">
      <ScrollArea.Root type="scroll">
        <ScrollArea.Viewport className="scroll-smooth snap-x">
          <div className="px-12 py-2 pb-6 mt-3 flex gap-6">
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

      <div className="absolute top-[45%] w-full flex items-center justify-between">
        <button
          type="button"
          className="p-2 rounded-full text-paragraph-light dark:text-paragraph-dark bg-cardBg-light dark:bg-cardBg-dark"
        >
          <ArrowLeftIcon className="h-5 w-5" />
        </button>

        <button
          type="button"
          className="p-2 rounded-full text-paragraph-light dark:text-paragraph-dark bg-cardBg-light dark:bg-cardBg-dark"
        >
          <ArrowRightIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default ProjectsCarousel;

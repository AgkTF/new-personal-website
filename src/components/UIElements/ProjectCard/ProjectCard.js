import Image from 'next/image';

const ProjectCard = ({ id, cover, name, selectedCard, setSelectedCard }) => {
  return (
    // <div
    //   className={`snap-center overflow-hidden transition ${
    //     selectedCard === id
    //       ? 'scale-110 ring-2 ring-paragraph-light dark:ring-tertiary-light rounded-xl'
    //       : 'opacity-50'
    //   }`}
    // >
    <>
      <button
        type="button"
        className="relative w-64 h-36 flex-shrink-0"
        onClick={() => setSelectedCard(id)}
      >
        <Image
          alt={name}
          src={cover}
          layout="fill"
          className={`object-cover cover object-top rounded-xl shadow-md w-full h-full`}
        />
      </button>
    </>
    // </div>
  );
};

export default ProjectCard;

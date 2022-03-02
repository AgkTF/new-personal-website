import Image from 'next/image';

const ProjectCard = ({ id, cover, name, selectedCard, setSelectedCard }) => {
  return (
    <div
      className={`relative w-64 h-36 flex-shrink-0 snap-center overflow-hidden transition ${
        selectedCard === id
          ? 'scale-110 ring-2 ring-tertiary-light rounded-xl box-content'
          : 'hover:scale-110 opacity-50'
      }`}
    >
      <button type="button" onClick={() => setSelectedCard(id)}>
        <Image
          alt={name}
          src={cover}
          layout="fill"
          className={`object-cover object-center rounded-xl shadow-md w-full h-full`}
        />
      </button>
    </div>
  );
};

export default ProjectCard;

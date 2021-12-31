const ProjectsIcon = ({ className = 'w-8 h-8' }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 20C2.11798 20 0 18.235 0 10C0 1.76501 2.11798 0 12 0C21.882 0 24 1.76501 24 10C24 18.235 21.882 20 12 20Z"
        fill="currentColor"
      />
      <path
        d="M3 22C2.44769 22 2 22.4477 2 23C2 23.5523 2.44769 24 3 24H21C21.5523 24 22 23.5523 22 23C22 22.4477 21.5523 22 21 22H3Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ProjectsIcon;

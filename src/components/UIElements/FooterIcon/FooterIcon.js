const FooterIcon = ({ textClass, bgClass, icon, title }) => {
  return (
    <div
      className={`group py-1 flex flex-col items-center justify-center font-spaceG`}
    >
      <div
        className={`p-2 rounded-lg shadow-sm ${textClass} ${bgClass} transition duration-300`}
      >
        {icon}
      </div>

      <p className="mt-1 text-xs font-normal text-headline-light dark:text-headline-dark">
        {title}
      </p>
    </div>
  );
};

export default FooterIcon;

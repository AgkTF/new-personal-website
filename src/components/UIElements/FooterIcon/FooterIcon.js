const FooterIcon = ({ textClass, bgClass, icon, title }) => {
  return (
    <div
      className={`py-1 flex flex-col items-center justify-center font-spaceG ${textClass}`}
    >
      <div className={`p-2 rounded-lg ${bgClass}`}>{icon}</div>

      <p className="text-sm font-medium">{title}</p>
    </div>
  );
};

export default FooterIcon;

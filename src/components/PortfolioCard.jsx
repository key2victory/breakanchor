const CardTypes = Object.freeze({
  design: 'bg-sky-500',
  presentation: 'bg-amber-500',
  research: 'bg-rose-500',
  articles: 'bg-emerald-500',
});
const PortfolioCard = ({ type, title }) => {
  const getCardColor = () => {
    if (type !== null) {
      return CardTypes[type];
    }

    return 'bg-zinc-800';
  };

  const blah = 'blah';

  blah;
  return (
    <div
      className={`rounded-lg min-w-[175px] grow h-[250px] flex items-end overflow-hidden ${getCardColor()}`}
    >
      <div className="bg-gray-500 p-4 w-full">
        <h2 className="text-lg">{title}</h2>
        <p className="rounded-full bg-white text-black px-3 py-1 mt-2 w-fit text-xs">
          {type.toUpperCase()}
        </p>
      </div>
    </div>
  );
};

export default PortfolioCard;

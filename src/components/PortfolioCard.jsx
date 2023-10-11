import { motion } from 'framer-motion';

const CardTypes = Object.freeze({
  design: 'bg-sky-500',
  presentation: 'bg-amber-500',
  research: 'bg-rose-500',
  articles: 'bg-emerald-500',
});

const PortfolioCard = ({ type, title, selectedType }) => {
  const getCardColor = () => {
    if (type !== null) {
      return CardTypes[type];
    }

    return 'bg-zinc-800';
  };

  return (
    <motion.div
      layout
      className={`relative rounded-lg h-[300px] flex items-end overflow-hidden before:transition-colors before:duration-200 before:ease-in-out before:absolute before:content-[''] before:inset-0  ${getCardColor()} ${
        selectedType === null
          ? ''
          : selectedType === type
          ? 'order-1'
          : 'order-2 before:bg-black/40'
      }`}
    >
      <div className="bg-gray-500 p-4 w-full">
        <h2 className="text-lg">{title}</h2>
        <p className="rounded-full bg-white text-black px-3 py-1 mt-2 w-fit text-xs">
          {type.toUpperCase()}
        </p>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;

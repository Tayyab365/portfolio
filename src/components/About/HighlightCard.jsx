const HighlightCard = ({ data }) => {
  return (
    <div className="bg-white p-5 rounded-xl space-y-3 border border-transparent hover:shadow-lg hover:border-[#903ddd] duration-300 transition-all">
      <p className="text-[#9810fa]">
        <data.icon />
      </p>
      <h1 className="text-xl font-semibold">{data.title}</h1>
      <p className="text-gray-600">{data.description}</p>
    </div>
  );
};

export default HighlightCard;

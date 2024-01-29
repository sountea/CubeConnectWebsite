import "./ProductionProcessCard.css";

const ProductionProcessCard = ({ steps }) => {
  return (
    <div className="work-experience-card border border-red-500 p-5 rounded-xl m-6">
      <h6 className="text-red-500 pt-1 pb-4 text-xl font-bold">
        {steps.title}
      </h6>
      <ul className="custom-list">
        {steps.content.map((item, index) => (
          <li className="text-white text-sm pb-4 font-bold" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductionProcessCard;

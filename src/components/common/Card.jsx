const Card = ({ name, price, imageLink, className }) => {
  let cName =
    "flex flex-col hover:shadow-card hover:cursor-pointer " + className;

  return (
    <div className={cName}>
      <div className="relative w-full h-[180px] min-w-[120px]">
        <img
          src={imageLink}
          alt={name}
          className="absolute h-full w-full object-cover"
        />
      </div>
      <span className="text-md font-medium text-gray-700 mt-1">{name}</span>
      <span className="text-sm font-normal text-gray-900 mt-1">
        NT${price}.00
      </span>
    </div>
  );
};

export default Card;

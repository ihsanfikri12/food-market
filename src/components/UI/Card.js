const Card = (props) => {
  return (
    <div
      onClick={props.onClick}
      className="relative overflow-hidden sm:rounded shadow-lg cursor-pointer"
    >
      {props.children}
    </div>
  );
};

export default Card;

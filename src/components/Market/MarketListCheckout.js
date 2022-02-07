import { useContext } from "react";

import { IoTrashOutline } from "react-icons/io5";
import totalPrice from "../../helpers/totalPrice";
import FoodContext from "../../contexts/FoodContext";

const MartketListCheckout = (props) => {
  const foodCtx = useContext(FoodContext);

  const removeChart = (id) => {
    foodCtx.setChartFood((value) => value.filter((v) => v.id !== id));
  };

  return (
    <div className="p-5 flex gap-2 sm:gap-6 md:gap-10 shadow-xl items-center w-full  md:w-fit">
      <div className="w-28 overflow-hidden object-cover object-center">
        <img src={props.value.image} className="w-full" alt={props.title} />
      </div>
      <h2 className="md:text-2xl lg:text-4xl font-medium">{props.title}</h2>
      <p className="group-hover:text-white md:text-xl  xl:text-2xl">
        {props.value.totalQty}x
      </p>
      <p className="group-hover:text-white md:text-xl  xl:text-2xl font-bold">
        {totalPrice(props.value.totalPrice)}
      </p>
      <IoTrashOutline
        onClick={removeChart.bind(this, props.value.id)}
        className="group-hover:text-white text-3xl cursor-pointer"
      />
    </div>
  );
};

export default MartketListCheckout;

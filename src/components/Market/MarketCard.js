import { useContext } from "react";

import Card from "../UI/Card";
import {
  FcGoodDecision,
  FcAlarmClock,
  FcApproval,
  FcMoneyTransfer,
} from "react-icons/fc";

import FoodContext from "../../contexts/FoodContext";

const MarketCard = (props) => {
  const foodCtx = useContext(FoodContext);

  const onCLickHandler = () => {
    foodCtx.setActiveFood({
      isActive: true,
      value: {
        id: props.data.id,
        image: props.data.image,
        title: props.data.title,
        price: props.data.price,
        gluten: props.data.glutenFreen,
        vegatarian: props.data.vegetarian,
        minutes: props.data.minutes,
        healthScore: props.data.healthScore,
      },
    });
  };

  return (
    <Card onClick={onCLickHandler}>
      <img
        src={props.data.image}
        className="md:w-full w-max object-cover object-center"
        alt="food"
      />
      <div className="py-8 px-5 w-full grid gap-y-2 content-center">
        <h3 className="text-xl sm:text-2xl md:text-3xl flex gap-x-2 items-center font-bold text-orange-600">
          <FcApproval />
          {props.data.title.split(" ").slice(0, 4).join(" ")}...
        </h3>

        {/* <p className=" text-gray-500 col-span-2">{props.data.summary}</p> */}
      </div>
      <div className="absolute flex gap-5 top-20 left-5  font-normal">
        <div className="text-logo text-xs sm:text-sm md:text-lg text-white font-bold bg-orange-600 rounded py-3 px-2">
          <FcAlarmClock /> {props.data.minutes} Min
        </div>
        <div className="text-logo text-xs sm:text-sm md:text-lg text-white font-bold bg-orange-600 rounded py-3 px-2">
          <FcGoodDecision />
          {props.data.healthScore}
        </div>
      </div>
      <div className="text-logo absolute top-5 left-5 rounded  bg-orange-500 p-3">
        <p className="text-sm sm:text-lg md:text-xl flex items-center gap-x-3 font-semibold text-white font-bold">
          <FcMoneyTransfer />
          {new Intl.NumberFormat("us", {
            style: "currency",
            currency: "USD",
            currencyDisplay: "symbol",
          }).format(props.data.price)}
        </p>
      </div>
    </Card>
  );
};

export default MarketCard;

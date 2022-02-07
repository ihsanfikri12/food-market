import { useContext, useState, Fragment } from "react";
import MartketListCheckout from "./MarketListCheckout";

import FoodContext from "../../contexts/FoodContext";

import totalPrice from "../../helpers/totalPrice";

const MarketCheckout = () => {
  const foodCtx = useContext(FoodContext);
  const [orderFood, setOrderFood] = useState(false);

  const chartFood = () => {
    if (!foodCtx.chartFood) return;

    return foodCtx.chartFood.map((value) => {
      const title = value.title.split(" ").slice(0, 3).join(" ");

      return <MartketListCheckout key={value.id} value={value} title={title} />;
    });
  };

  const amountPrice = () => {
    if (!foodCtx.chartFood) return;

    return totalPrice(
      foodCtx.chartFood.reduce((acc, value, i) => {
        return (acc = acc + value.totalPrice);
      }, 0)
    );
  };

  const OnClickOrder = () => {
    foodCtx.setChartFood([]);
    setOrderFood(true);
  };

  const OrderRender = () => {
    return (
      <Fragment>
        <h2 className="md:text-2xl lg:text-3xl">Your Order</h2>
        {chartFood()}
        <p className="md:text-xl lg:text-2xl font-light">
          Total: <span className="font-bold">{amountPrice()}</span>
        </p>
        <button
          className="w-96 py-3 px-5 bg-orange-500 rounded text-white"
          onClick={OnClickOrder}
        >
          {" "}
          Order
        </button>
      </Fragment>
    );
  };

  const FinishOrder = () => {
    return (
      <h3 className="md:text-2xl lg:text-3xl font-bold">
        Thank you for your order
      </h3>
    );
  };

  return (
    <div className="py-28 md:px-60 md:py-40 grid gap-y-6 justify-center justify-items-center md:gap-y-10 ">
      {orderFood ? <FinishOrder /> : <OrderRender />}
    </div>
  );
};

export default MarketCheckout;

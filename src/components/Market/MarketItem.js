import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";

import MarketInputQty from "./MarketInputQty";

import { IoCloseOutline } from "react-icons/io5";
import { FcAlarmClock, FcGoodDecision } from "react-icons/fc";

import FoodContext from "../../contexts/FoodContext";
import totalPrice from "../../helpers/totalPrice";

const MarketItem = () => {
  const foodCtx = useContext(FoodContext);
  const [qty, setQty] = useState(1);

  const { id, image, title, price, minutes, healthScore } =
    foodCtx.activeFood.value;

  const onCloseHandler = () => {
    foodCtx.setActiveFood({ isActive: false, value: {} });
  };

  const onQtyChangeHandler = (value) => {
    setQty(value);
  };

  const addChart = (e) => {
    e.preventDefault();

    const checkChart = foodCtx.chartFood
      ? foodCtx.chartFood.some((value) => value.id === id)
      : "";

    const chart = {
      id,
      image,
      title,
      price,
      minutes,
      healthScore,
      totalQty: qty,
      totalPrice: price * qty,
    };

    console.log(chart);

    if (!checkChart) {
      foodCtx.setChartFood((value) => [...(value || []), chart]);
      return onCloseHandler();
    }

    foodCtx.setChartFood((value) =>
      value.map((v) => {
        if (v.id !== chart.id) return v;

        chart.totalQty += qty;

        return { ...v, ...chart };
      })
    );

    return onCloseHandler();
  };

  return (
    <React.Fragment>
      <div
        onClick={onCloseHandler}
        className="fixed h-screen z-20 w-full backdrop-blur-md"
      ></div>

      <div className="fixed md:inset-0 md:m-auto  w-full h-screen lg:w-2/3 md:h-max bg-gray-100 z-40">
        <div
          className="absolute top-5 right-3 sm:right-2 lg:right-3 xl:right-8 text-4xl cursor-pointer"
          onClick={onCloseHandler}
        >
          <IoCloseOutline />
        </div>

        <div className="grid md:px-5 py-20 md:py-10  md:grid-cols-2 gap-y-5 gap-x-2 justify-center justify-items-center">
          <div className="overflow-hidden object-cover object-center">
            <img src={image} alt={title.split(" ").slice(1).join("")} />
          </div>

          <div className="flex flex-col gap-5 justify-center items-center lg:justify-self-center ">
            <h2 className="text-lg sm:text-xl md:text-3xl font-medium">
              {title}
            </h2>
            <div className="flex gap-10 items-center">
              <p className="text-lg sm:text-xl md:text-2xl font-medium">
                {totalPrice(price)}
              </p>
              <div className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl">
                <FcAlarmClock /> {minutes} Min
              </div>
              <div className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl">
                <FcGoodDecision />
                {healthScore}
              </div>
            </div>
            <div className="pt-5 flex flex-col gap-8">
              {/* input */}
              <MarketInputQty
                setQty={onQtyChangeHandler}
                qty={qty}
                price={price}
              />
              <div className="flex gap-5 justify-center">
                <button
                  onClick={addChart}
                  className="py-2 px-4 bg-orange-400 text-white text-lg rounded font-medium self-start"
                >
                  Add To Cart
                </button>
                <button className="py-2 px-4 bg-orange-500 text-white text-lg rounded font-medium self-start">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ReactDOM.createPortal(
  <MarketItem />,
  document.getElementById("modal")
);

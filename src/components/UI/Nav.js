import { useContext, useState } from "react";

import FoodContext from "../../contexts/FoodContext";

import {
  IoCartOutline,
  IoLogOutOutline,
  IoTrashOutline,
} from "react-icons/io5";
import totalPrice from "../../helpers/totalPrice";

const Nav = () => {
  const foodCtx = useContext(FoodContext);
  const [isChartExist, setIsChartExist] = useState(false);

  const chartTotal = foodCtx.chartFood?.length || 0;

  const chartHover = (isHover) => {
    setIsChartExist(isHover);
  };

  const removeChart = (id) => {
    foodCtx.setChartFood((value) => value.filter((v) => v.id !== id));
  };

  const onChartClick = () => {
    chartHover(false);
    foodCtx.setCheckout(true);
  };

  const chartList = () => {
    if (!foodCtx.chartFood) return;

    return foodCtx.chartFood.map((value) => {
      return (
        <div
          key={value.id}
          onClick={onChartClick}
          className="group cursor-pointer flex p-4 hover:bg-orange-400 items-center gap-4 border-b-2 last:border-b-0  overflow-hidden"
        >
          <img src={value.image} className="w-14" />
          <div className="flex flex-col gap-2">
            <h4 className="group-hover:text-white font-bold text-orange-600">
              {value.title.split(" ").slice(0, 3).join(" ")}
            </h4>
            <div className="flex gap-5">
              <p className="group-hover:text-white text-sm">
                {value.totalQty}x
              </p>
              <p className="group-hover:text-white text-sm font-bold">
                {totalPrice(value.totalPrice)}
              </p>
              <IoTrashOutline
                onClick={removeChart.bind(this, value.id)}
                className="group-hover:text-white"
              />
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <nav className="fixed z-40 bg-white w-full px-5 gap-2 md:px-10 lg:px-32 flex items-center h-20 border-y-2">
      <p
        className="sm:text-lg md:text-2xl lg:text-3xl font-bold text-orange-600 cursor-pointer"
        onClick={foodCtx.setCheckout.bind(null, false)}
      >
        Food Market
      </p>

      <div className="grow flex h-full items-center justify-end gap-5 lg:gap-10 text-lg relative w-80">
        <div
          onMouseEnter={chartHover.bind(this, true)}
          onMouseLeave={chartHover.bind(this, false)}
        >
          <div
            className="text-logo relative cursor-pointer"
            onClick={onChartClick}
          >
            <span className="lg:text-4xl md:text-3xl sm:text-2xl">
              <IoCartOutline />
            </span>
            <span
              className={`absolute text-xs -top-1 md:text-base md:-top-3 
            ${chartTotal ? "visible" : "hidden"} 
            -left-1 bg-orange-600 px-1 md:px-2 rounded-full text-white`}
            >
              {chartTotal}
            </span>
            Chart
          </div>

          <div
            className={`absolute top-4 right-0 rounded  ${
              isChartExist ? "" : "hidden"
            }  
              drop-shadow-2xl translate-y-10 z-10 bg-white w-max`}
          >
            <ul className="flex flex-col gap-x-1">{chartList()}</ul>
          </div>
        </div>

        <a className="text-logo">
          <span className="sm:text-2xl lg:text-4xl md:text-3xl">
            <IoLogOutOutline />
          </span>
          SignOut
        </a>
      </div>
    </nav>
  );
};

export default Nav;

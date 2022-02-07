import { useCallback, useEffect, useContext } from "react";

import recipeApi from "../../api/recipeApi";
import MarketCard from "./MarketCard";
import FoodContext from "../../contexts/FoodContext";
import MarketSearch from "./MarketSearch";
import dataFormat from "../../helpers/changeDataFormat";

const MarketList = () => {
  const foodCtx = useContext(FoodContext);

  const getFood = useCallback(async () => {
    const { data } = await recipeApi.get("/recipes/random", {
      params: {
        number: 12,
      },
    });

    const res = dataFormat(data.recipes);

    foodCtx.setAllFood(res);
  }, []);

  useEffect(() => {
    getFood();
  }, [getFood]);

  const renderMarket = () => {
    const market = foodCtx.allFood.map((value) => {
      return <MarketCard data={value} key={value.id} />;
    });

    return market;
  };

  return (
    <div className="sm:mx-15 md:mx-32 my-7 sm:my-10 md:my-20 flex flex-col gap-7 md:gap-10 items-center">
      <h2 className="inline-block text-2xl sm:text-3xl md:text-4xl text-center uppercase tracking-widest text-gray-800 border-b-4 border-orange-400">
        Our Food
      </h2>
      <div className="w-full xl:w-1/2 py-1 px-2 sm:px-7 lg:px-0">
        <MarketSearch />
      </div>
      <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1  justify-items-center gap-y-7 sm:gap-y-14 gap-x-10">
        {renderMarket()}
      </div>
    </div>
  );
};

export default MarketList;

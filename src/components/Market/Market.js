import MarketBanner from "./MarketBanner";
import MarketList from "./MarketList";
import MarketItem from "./MarketItem";
import MarketCheckout from "./MarketCheckout";

import FoodContext from "../../contexts/FoodContext";
import { useContext, Fragment } from "react";

const Market = () => {
  const foodCtx = useContext(FoodContext);

  const foodRender = () => {
    // if (!foodCtx.checkout)
    //   return (

    //   );

    // if (foodCtx.activeFood.isActive) return <MarketItem />;

    if (foodCtx.checkout) return <MarketCheckout />;

    return (
      <Fragment>
        <MarketBanner />
        <MarketList />
        {foodCtx.activeFood.isActive && MarketItem}
      </Fragment>
    );
  };

  return (
    <div>
      {/* <MarketBanner />
      <MarketList />
      {foodCtx.activeFood.isActive && MarketItem}
      {foodCtx.checkout && <MarketCheckout />} */}

      {/* <MarketOrder /> */}

      {/* {MarketOrder} */}

      {foodRender()}
    </div>
  );
};

export default Market;

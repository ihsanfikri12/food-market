import { createContext, useEffect, useState } from "react";

const FoodContext = createContext({
  allFood: [],
  activeFood: {},
  chartFood: [],
  checkout: false,
  setAllFood: () => {},
  setActiveFood: () => {},
  setChartFood: () => {},
  setCheckout: () => {},
});

export const FoodContextProvider = (props) => {
  const [allFood, setAllFood] = useState([]);
  const [activeFood, setActiveFood] = useState({
    isActive: false,
    value: {},
  });
  const [chartFood, setChartFood] = useState([]);
  const [checkout, setCheckout] = useState(false);

  useEffect(() => {
    const storedChartFood = localStorage.getItem("chartFood");
    setChartFood(storedChartFood);
  }, []);

  return (
    <FoodContext.Provider
      value={{
        allFood,
        activeFood,
        chartFood,
        checkout,
        setAllFood,
        setActiveFood,
        setChartFood,
        setCheckout,
      }}
    >
      {props.children}
    </FoodContext.Provider>
  );
};

export default FoodContext;

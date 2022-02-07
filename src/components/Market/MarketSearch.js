import { useContext, useEffect, useState } from "react";
import FoodContext from "../../contexts/FoodContext";

import recipeApi from "../../api/recipeApi";
import dataFormat from "../../helpers/changeDataFormat";

const MarketSearch = () => {
  const foodCtx = useContext(FoodContext);
  const [inputSearch, setInputSearch] = useState("");
  const [inputErr, setInputErr] = useState(false);

  const onChangeInput = (e) => {
    setInputSearch(e.target.value);
  };

  const onSubmitInput = async (e) => {
    e.preventDefault();
    // const search = inputSearch;
    // setInputSearch("");

    // const { data } = await recipeApi.get("recipes/complexSearch", {
    //   params: {
    //     query: search,
    //     number: 6,
    //   },
    // });

    // console.log(data);

    // const res = dataFormat(data.results);
    // console.log(data);

    // foodCtx.setAllFood(res);

    setInputErr(true);
    setInputSearch("");
  };

  const inputError = () => {
    if (!inputErr) return;

    return (
      <p className="text-center py-2 text-red-500 font-bold">
        Sorry, This input feature still can't be used.
      </p>
    );
  };

  return (
    <form onSubmit={onSubmitInput}>
      <input
        onChange={onChangeInput}
        value={inputSearch}
        placeholder="Search Food"
        className="w-full border-4 drop-shadow-sm py-3 px-5 rounded-full"
      />
      {inputError()}
    </form>
  );
};

export default MarketSearch;

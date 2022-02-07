import React, { useEffect, useState } from "react";

import totalPrice from "../../helpers/totalPrice";

import { IoAddSharp, IoRemoveSharp } from "react-icons/io5";

const MarketInputQty = (props) => {
  const [subTotal, setSubTotal] = useState(0);
  const [qty, setQty] = useState(props.qty);

  console.log(props.price);

  useEffect(() => {
    props.setQty(qty);
    setSubTotal(props.price * qty);
  }, [qty]);

  const onQtyChangeHandler = (e) => {
    if (e.target.value < 0) return;

    setQty(+e.target.value);
  };

  const onQtyClick = (menu) => {
    if (menu === "add") setQty((value) => value + 1);
    if (menu === "remove" && qty > 1) setQty((value) => value - 1);

    return;
  };

  return (
    <div className="flex gap-5 items-center text-sm text-center text-2xl">
      <IoRemoveSharp onClick={onQtyClick.bind(null, "remove")} />
      <input
        type="text"
        className="w-10 text-center sm:text-xl text-lg bg-gray-100"
        value={props.qty}
        onChange={onQtyChangeHandler}
      />
      <IoAddSharp onClick={onQtyClick.bind(null, "add")} />
      <p className="pl-5 text-lg sm:text-xl ">
        SubTotal :<span className="font-semibold"> {totalPrice(subTotal)}</span>
      </p>
    </div>
  );
};

export default MarketInputQty;

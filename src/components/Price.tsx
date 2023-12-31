"use client";
import React, { useEffect, useState } from "react";
import AddToCartButton from "./AddToCartButton";
import { Product } from "@/types/types";

type Props = {
  item: Product;
};

const Price = ({ item }: Props) => {
  const { price, options, catSlug, id, title, desc, img } = item;
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setTotal(
      +quantity *
        (options ? +price + +options[selected].additionalPrice : +price)
    );
  }, [quantity, selected, options, price]);

  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleIncrease = () => {
    setQuantity((prev) => (prev < 9 ? prev + 1 : 9));
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">${Number(total).toFixed(2)}</h2>
      {/* OPTIONS CONTAINER */}
      <div className="flex gap-4">
        {options?.map((option, index) => (
          <button
            key={option.title}
            className="min-w-[6rem] p-2 ring-1 ring-red-400 rounded-md"
            style={{
              background: selected === index ? "rgb(248 113 113)" : "white",
              color: selected === index ? "white" : "red",
            }}
            onClick={() => setSelected(index)}
          >
            {option.title}
          </button>
        ))}
      </div>
      {/* QUANTITY AND ADD BUTTON CONTAINER */}
      <div className="flex justify-between items-center">
        {/* QUANTITY */}
        <div className="flex justify-between w-full p-3 ring-1 ring-red-500">
          <span>Quantity</span>
          <div className="flex gap-4 items-center">
            <button onClick={handleDecrease}>{"<"}</button>
            <span>{quantity}</span>
            <button onClick={handleIncrease}>{">"}</button>
          </div>
        </div>
      </div>
      <AddToCartButton
        item={{
          id,
          title,
          desc,
          img,
          price,
          catSlug,
          options: options![selected] as any,
          quantity,
        }}
      />
    </div>
  );
};

export default Price;

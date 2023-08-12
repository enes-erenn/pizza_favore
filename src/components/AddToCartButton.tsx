"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { CartProduct } from "@/types/types";
import { add } from "@/utils/cartSlice";

type Props = {
  item: CartProduct;
};

const AddToCartButton = ({ item }: Props) => {
  const dispatch = useDispatch();

  return (
    <button
      className="uppercase w-56 bg-red-500 text-white p-3 ring-1 ring-red-500"
      onClick={() => dispatch(add(item))}
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;

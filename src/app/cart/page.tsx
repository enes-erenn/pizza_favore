"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { CartProduct } from "@/types/types";
import { useGetCartTotal } from "@/hooks/useGetCartTotal";

const CartPage = () => {
  const data = useSelector((state: any) => state.cart);
  const deliveryCost = 0;
  const serviceCost = 0;
  const cartTotal = useGetCartTotal();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(+cartTotal + +deliveryCost + +serviceCost);
  }, [cartTotal, deliveryCost, serviceCost]);
  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row">
      {/* PRODUCTS CONTAINER */}
      <div className="h-1/2 p-4 flex flex-col justify-center overflow-auto lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
        {/* SINGLE ITEM */}
        {data && data.length ? (
          data.map((item: CartProduct) => (
            <div
              key={item.id}
              className="flex items-center justify-between mb-4"
            >
              <Image src="/temporary/p1.png" alt="" width={100} height={100} />
              <div className="">
                <h1 className="uppercase text-xl font-bold">{item.title}</h1>
                <span>Large</span>
              </div>
              <h2 className="font-bold">${item.price}</h2>
              <h2 className="font-bold">x{item.quantity}</h2>
            </div>
          ))
        ) : (
          <p>You did not add any item into your cart.</p>
        )}
      </div>
      {/* PAYMENT CONTAINER */}
      <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
        <div className="flex justify-between">
          <span className="">Subtotal (3 items)</span>
          <span className="">${cartTotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="">Service Cost</span>
          <span className="">${serviceCost.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="">Delivery Cost</span>
          <span className="text-green-500">
            {deliveryCost > 0 ? deliveryCost.toFixed(2) : <span>FREE!</span>}
          </span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="">TOTAL(INCL. VAT)</span>
          <span className="font-bold">${total.toFixed(2)}</span>
        </div>
        <button
          disabled={data.length === 0}
          className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end disabled:bg-gray-600 disabled:opacity-60"
        >
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartPage;

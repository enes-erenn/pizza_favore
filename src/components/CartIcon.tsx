"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";

type Props = {
  handleChange: () => void;
};
const CartIcon = ({ handleChange }: Props) => {
  const data = useSelector((state: any) => state.cart);
  return (
    <Link
      href="/cart"
      className="flex items-center gap-4"
      onClick={handleChange}
    >
      <div className="relative w-8 h-8 md:h-5 md:w-5">
        <Image src="/cart.png" alt="Cart" fill />
      </div>
      <span>Cart ({data.length})</span>
    </Link>
  );
};

export default CartIcon;

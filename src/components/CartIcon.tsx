"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

type Props = {
  handleChange: () => void;
};
const CartIcon = ({ handleChange }: Props) => {
  return (
    <Link
      href="/cart"
      className="flex items-center gap-4"
      onClick={handleChange}
    >
      <div className="relative w-8 h-8 md:h-5 md:w-5">
        <Image src="/cart.png" alt="Cart" fill />
      </div>
      <span>Cart (3)</span>
    </Link>
  );
};

export default CartIcon;

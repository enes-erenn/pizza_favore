"use client";
import React, { useState } from "react";
import Link from "next/link";
import Menu from "./Menu";
import Links from "./Links";
import Image from "next/image";
import CartIcon from "./CartIcon";
import UserLinks from "./UserLinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleChange = () => {
    setOpen((bool) => !bool);
  };
  return (
    <div className="h-12  text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-36">
      {/* LEFT LINKS */}
      <div className="hidden md:flex gap-4 flex-1">
        <Links handleChange={handleChange} />
      </div>
      {/* LOGO */}
      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href="/">Pizza Favore</Link>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        <Menu open={open} handleChange={handleChange} />
      </div>
      {/* RIGHT LINKS */}
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md">
          <Image src="/phone.png" alt="" width={20} height={20} />
          <span>123 456 78</span>
        </div>
        <UserLinks />
        <CartIcon handleChange={handleChange} />
      </div>
    </div>
  );
};

export default Navbar;

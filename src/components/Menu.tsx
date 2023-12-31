import React from "react";
import Image from "next/image";
import Links from "./Links";
import UserLinks from "./UserLinks";

type Props = {
  open: boolean;
  handleChange: () => void;
};

const Menu = ({ open, handleChange }: Props) => {
  return (
    <div>
      <Image
        src={open ? "/close.png" : "/open.png"}
        alt=""
        width={20}
        height={20}
        onClick={handleChange}
        className="cursor-pointer"
      />
      {open && (
        <div className="bg-red-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex items-center justify-center text-3xl flex-col gap-8 z-10">
          <Links handleChange={handleChange} />
          <UserLinks />
        </div>
      )}
    </div>
  );
};

export default Menu;

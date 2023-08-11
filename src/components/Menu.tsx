import React from "react";
import Image from "next/image";
import Link from "next/link";
import Links from "./Links";

type Props = {
  open: boolean;
  user: any;
  handleChange: () => void;
};

const Menu = ({ open, handleChange, user }: Props) => {
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

          <Link href={user ? "/orders" : "login"} onClick={handleChange}>
            {user ? "Orders" : "Login"}
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;

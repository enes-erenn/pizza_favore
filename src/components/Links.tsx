import React from "react";
import Link from "next/link";

type Props = {
  handleChange: () => void;
};
const Links = ({ handleChange }: Props) => {
  const links = [
    { id: 1, title: "Homepage", url: "/" },
    { id: 2, title: "Menu", url: "/menu" },
    { id: 3, title: "Working Hours", url: "/" },
    { id: 4, title: "Contact", url: "/" },
  ];

  return (
    <>
      {links.map((link) => (
        <Link href={link.url} key={link.id} onClick={handleChange}>
          {link.title}
        </Link>
      ))}
    </>
  );
};

export default Links;

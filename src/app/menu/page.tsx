import React from "react";
import Link from "next/link";

const menu = [
  {
    id: 1,
    slug: "pastas",
    title: "Italian Pastas",
    desc: "Savor the taste of perfection with our exquisite Italian handmade pasta menu.",
    img: "/temporary/m1.png",
    color: "white",
  },
  {
    id: 2,
    slug: "burgers",
    title: "Juicy Burgers",
    desc: "Burger Bliss: Juicy patties, bold flavors, and gourmet toppings galore.",
    img: "/temporary/m2.png",
    color: "black",
  },
  {
    id: 3,
    slug: "pizzas",
    title: "Cheesy Pizzas",
    desc: "Pizza Paradise: Irresistible slices, mouthwatering toppings, and cheesy perfection.",
    img: "/temporary/m3.png",
    color: "white",
  },
];

const MenuPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center">
      {menu.map((cat) => (
        <Link
          key={cat.id}
          href={`/menu/${cat.slug}`}
          className="w-full h-1/3 bg-cover p-8 md:h-1/2"
          style={{ backgroundImage: `url(${cat.img})` }}
        >
          <div className={`text-${cat.color} w-1/2`}>
            <h1 className="uppercase font-bold text-3xl">{cat.title}</h1>
            <p className="text-sm my-8">{cat.desc}</p>
            <button
              className={`hidden 2xl:block bg-${cat.color} text-${
                cat.color === "black" ? "white" : "red-500"
              } py-2 px-4 rounded-md`}
            >
              Explore
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;

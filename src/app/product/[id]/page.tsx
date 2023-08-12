import React from "react";
import Image from "next/image";
import Price from "@/components/Price";

const getData = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/products?id=${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Fail!");
  }

  return res.json();
};

const SingleProductPage = async ({ params }: { params: { id: string } }) => {
  const data = await getData(params.id);

  return (
    <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-500 md:flex-row md:gap-8 md:items-center">
      {/* IMAGE CONTAINER */}
      {data[0].img && (
        <div className="relative w-full h-1/2 md:h-[70%]">
          <Image src={data[0].img} alt="" className="object-contain" fill />
        </div>
      )}
      {/* TEXT CONTAINER */}
      <div className="h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
        <h1 className="text-3xl font-bold uppercase xl:text-5xl">
          {data[0].title}
        </h1>
        <p>{data[0].desc}</p>
        <Price
          price={data[0].price}
          id={data[0].id}
          options={data[0].options}
        />
      </div>
    </div>
  );
};

export default SingleProductPage;

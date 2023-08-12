"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Order } from "@/types/types";

const OrdersPage = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      fetch("http://localhost:3000/api/orders").then((res) => res.json()),
  });

  return (
    <>
      {data && data.length ? (
        <div className="p-4 lg:px-20 xl:px-40">
          <table className="w-full border-separate border-spacing-3">
            <thead>
              <tr className="text-left">
                <th className="hidden md:block">Order ID</th>
                <th>Date</th>
                <th>Price</th>
                <th className="hidden md:block">Products</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item: Order) => (
                <tr key={item.id} className="text-sm md:text-base bg-red-50">
                  <td className="hidden md:block py-6 px-1">{item.id}</td>
                  <td className="py-6 px-1">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </td>
                  <td className="py-6 px-1">{item.price}</td>
                  <td className="hidden md:block py-6 px-1">
                    {item.products.map((p) => (
                      <div key={p.id}>{p.title}</div>
                    ))}
                  </td>
                  <td className="py-6 px-1">{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No orders found.</p>
      )}
      {isLoading && <p>Loading...</p>}
    </>
  );
};

export default OrdersPage;

import { CartProduct } from "@/types/types";
import { useSelector } from "react-redux";

export const useGetCartTotal = () => {
  const cart = useSelector((state: any) => state.cart);

  // This reduce function will sum up all of the price values of cart array starting with 0
  const total = cart.reduce(
    (accumulator: number, item: CartProduct) =>
      accumulator + item.price * item.quantity!,
    0
  );

  return total;
};

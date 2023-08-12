export type Category = {
  id: string;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
};

export type Menu = Category[];

export type Product = {
  id: string;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

export type Products = Product[];

export type Order = {
  id: string;
  createdAt: Date;
  price: number;
  products: Products;
  status: string;
  intent_id: string;
  userEmail: string;
};

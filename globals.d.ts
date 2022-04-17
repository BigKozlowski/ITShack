declare module "*.svg";

type menuItem = {
  title: string;
  imageUrl: string;
  size: string | undefined;
  linkUrl: string;
};

type collectionPreview = {
  title: string;
  items: item[];
  routeName: string;
};

type item = {
  name: string;
  id: number;
  price: number;
  imageUrl: string;
};

type user = {
  createdAt?: Date;
  displayName?: string;
  email?: string;
  id?: string;
};

type userState = {
  currentUser: user | null;
};

type cartItem = {
  name: string;
  id: number;
  price: number;
  imageUrl: string;
  quantity: number;
  totalAmount: number;
};

type cart = {
  isHidden: boolean;
  cartItems: cartItem[];
};

type collectionUrl = "hats" | "sneakers" | "jackets" | "womens" | "mens";

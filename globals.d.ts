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
};

type item = {
  name: string;
  id: number;
  price: number;
  imageUrl: string;
};

type User = {
  createdAt?: Date;
  displayName?: string;
  email?: string;
  id?: string;
}

type userState = {
  currentUser: User | null
}
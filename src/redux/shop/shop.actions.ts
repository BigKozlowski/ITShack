import ShopActionTypes from "./shop.types";

export const updateCollections = (collectionsMap: any) => {
  return {
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap,
  };
};

import { createSelector } from "reselect";

const selectShop = (state: { shop: any }) => state.shop;

export const selectCollections = createSelector([selectShop], (shop) => shop.collections);

export const selectCollectionsForPreview = createSelector([selectCollections], (collections) =>
  collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = (collectionUrlParam: string | undefined) =>
  createSelector([selectCollections], (collections) => {
    if (collectionUrlParam) {
      return collections ? collections[collectionUrlParam] : null;
    }
  });

export const selectIsCollectionFetching = createSelector([selectShop], shop => shop.isFetching)
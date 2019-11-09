import { createSelector } from "reselect";
const selectShopData = state => state.shop;

export const selectShopCollection = createSelector(
  [selectShopData],
  shop => shop.collections
);
export const selectCollectionsForPreview = createSelector(
  [selectShopCollection],
  collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = collectionURLParam =>
  createSelector(
    [selectShopCollection],
    collections => collections[collectionURLParam]
  );

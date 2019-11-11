import { createSelector } from "reselect";
const selectShopData = state => state.shop;

export const selectShopCollection = createSelector(
  [selectShopData],
  shop => shop.collections
);
export const selectCollectionsForPreview = createSelector(
  [selectShopCollection],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = collectionURLParam =>
  createSelector(
    [selectShopCollection],
    collections => (collections ? collections[collectionURLParam] : null)
  );

export const selectIsCollectionFetching = createSelector(
  [selectShopData],
  shop => shop.isFetching
);

export const selectIsCollectionsLoading = createSelector(
  [selectShopData],
  shop => !!shop.collections
);

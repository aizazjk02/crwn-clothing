import { createSelector } from "reselect";
import { memoize } from "lodash";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsPreview = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = memoize((collectionUrlParams) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParams]
  )
);

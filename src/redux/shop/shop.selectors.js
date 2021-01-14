import { createSelector } from "reselect";
import memoize from 'lodash.memoize';

const selectShop = state => state.shopData;

export const selectCollections = createSelector(
    [selectShop],
    shopData => shopData.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
  )
);
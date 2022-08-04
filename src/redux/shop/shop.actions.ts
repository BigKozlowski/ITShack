import { convertCollectionsSnapshotToMap, firestore } from "../../firebase/firebase.utils";
import ShopActionTypes from "./shop.types";

export const fetchCollectionsStart = () => {
  return {
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
  };
};

export const fetchCollectionsSuccess = (collectionsMap: any) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
})

export const fetchCollectionsFailure = (errorMessage: string) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});


export const fetchCollectionsStartAsync = () => {
  return (dispatch: (action: {type: string, payload?: any}) => void) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());

    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionsSuccess(collectionsMap));
    }).catch(e => dispatch(fetchCollectionsFailure(e.message)))
  }
}
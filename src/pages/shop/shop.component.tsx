import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import { convertCollectionsSnapshotToMap, firestore } from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop.actions";
import withSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

const ShopPage = (props: { updateCollections: any }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { updateCollections } = props;
    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot((snapshot) => {
      console.dir(snapshot);
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      console.log(collectionsMap);
      updateCollections(collectionsMap);
      setLoading(false);
    });
  }, [props]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<CollectionsOverviewWithSpinner isLoading={loading} />} />
        <Route path="/:collectionId" element={<CollectionPageWithSpinner isLoading={loading} />} />
      </Routes>
    </div>
  );
};

const mapDispatchToProps = (dispatch: (action: { type: string; payload: item }) => any) => ({
  updateCollections: (collectionsMap: any) => dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);

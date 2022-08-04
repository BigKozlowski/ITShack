import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import withSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

const ShopPage = (props: { fetchCollectionsStartAsync: any, isCollectionFetching: boolean }) => {
  useEffect(() => {
    props.fetchCollectionsStartAsync();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<CollectionsOverviewWithSpinner isLoading={props.isCollectionFetching} />} />
        <Route path="/:collectionId" element={<CollectionPageWithSpinner isLoading={props.isCollectionFetching} />} />
      </Routes>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching
})

const mapDispatchToProps: (dispatch: any) => { fetchCollectionsStartAsync: () => any; } = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);

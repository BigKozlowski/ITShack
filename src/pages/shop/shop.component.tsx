import React from "react";
import { Route, Routes } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

const ShopPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CollectionsOverview />} />
        <Route path="/:collectionId" element={<CollectionPage />} />
      </Routes>
    </div>
  );
};

export default ShopPage;

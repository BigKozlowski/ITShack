import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectCollection } from "../../redux/shop/shop.selectors";

import { CollectionItemContainer, CollectionItemsContainer, CollectionPageContainer, CollectionTitle } from "./collection.styles";

const CollectionPage = () => {
  let { collectionId } = useParams();

  const collection = useSelector(selectCollection(collectionId));

  const { title, items } = collection;

  return (
    <CollectionPageContainer>
      <CollectionTitle>Collection: {title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map((item: item) => (
          <CollectionItemContainer key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

export default CollectionPage;

import React from "react";
import { Link } from "react-router-dom";

import CollectionItem from "../collection-item/collection-item.component";
import { CollectionPreviewContainer, TitleContainer, PreviewContainer } from "./collection-preview.styles";

const CollectionPreview = ({ title, items, routeName }: collectionPreview) => {
  return (
    <CollectionPreviewContainer>
      <Link to={routeName}>
        <TitleContainer>{title.toUpperCase()}</TitleContainer>
      </Link>
      <PreviewContainer>
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;

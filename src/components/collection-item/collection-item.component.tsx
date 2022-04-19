import React from "react";
import { connect } from "react-redux";

import { addItemToCart } from "../../redux/cart/cart.acrions";

import {
  AddButton,
  BackgroundImage,
  CollectionFooterContainer,
  CollectionItemContainer,
  NameContainer,
  PriceContainer,
} from "./collection-item.styles";

const CollectionItem = ({ item, addItemToCart }: { item: item; addItemToCart: any }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton inverted onClick={() => addItemToCart(item)}>
        {" "}
        ADD TO CART{" "}
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch: (action: { type: string; payload: item }) => any) => ({
  addItemToCart: (item: item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);

import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";

import { addItemToCart } from "../../redux/cart/cart.acrions";

import "./collection-item.styles.scss";

const CollectionItem = ({ item, addItemToCart }: { item: item; addItemToCart: any }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={() => addItemToCart(item)}>
        {" "}
        ADD TO CART{" "}
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch: (action: { type: string; payload: item }) => any) => ({
  addItemToCart: (item: item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);

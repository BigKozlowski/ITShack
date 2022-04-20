import React from "react";

import {
  BackgroundImageContainer,
  ContentContainer,
  ContentSubtitle,
  ContentTitle,
  MenuItemContainer,
} from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, size, linkUrl }: menuItem) => {
  return (
    <MenuItemContainer
      onClick={() => {
        window.location.href = linkUrl;
      }}
      size={size}
    >
      <BackgroundImageContainer className="background-image" imageUrl={imageUrl} />
      <ContentContainer className="content">
        <ContentTitle>{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle>SHOP NOW</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default MenuItem;

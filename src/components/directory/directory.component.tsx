import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import MenuItem from "../menu-item/menu-item.component";
import { DirectoryContainer } from "./directory.styles";

const Directory = ({
  sections,
}: {
  sections: { title: string; imageUrl: string; id: number; size?: string; linkUrl: string }[];
}) => {
  return (
    <DirectoryContainer>
      {sections.map(({ title, imageUrl, id, size, linkUrl }) => {
        return <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />;
      })}
    </DirectoryContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);

import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

const Directory = ({
  sections,
}: {
  sections: { title: string; imageUrl: string; id: number; size?: string; linkUrl: string }[];
}) => {
  return (
    <div className="directory-menu">
      {sections.map(({ title, imageUrl, id, size, linkUrl }) => {
        return <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);

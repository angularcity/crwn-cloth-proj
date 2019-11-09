import React from "react";
import { connect } from "react-redux";
import "./collections-overview.styles.scss";
import { createStructuredSelector } from "reselect";

import { selectShopCollection } from "./../../redux/shop/shop.selector";
import CollectionPreview from "./../collection-preview/collection-preview.component";
import { selectCollectionsForPreview } from "./../../redux/shop/shop.selector";
const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherProps }) => (
      <CollectionPreview key={id} {...otherProps} />
    ))}
  </div>
);
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});
export default connect(
  mapStateToProps,
  null
)(CollectionsOverview);

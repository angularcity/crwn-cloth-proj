import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionsLoading } from "../../redux/shop/shop.selector";
import { compose } from "redux";

import CollectionsPage from "./collections.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoading(state)
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsPage);

export default CollectionPageContainer;

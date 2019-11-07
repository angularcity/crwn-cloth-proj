import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";

import { connect } from "react-redux";
import { toggleCartVisibility } from "./../../redux/cart/cart.actions";
const CartIcon = ({ toggleCartVisibility }) => (
  <div className="cart-icon" onClick={toggleCartVisibility}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count"> 0 </span>
  </div>
);

export default connect(
  null,
  { toggleCartVisibility }
)(CartIcon);

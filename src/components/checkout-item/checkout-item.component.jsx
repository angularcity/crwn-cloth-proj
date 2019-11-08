import React from "react";
import "./checkout-item.styles.scss";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  removeItem,
  addItem
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem, clearItemFromCart, removeItem, addItem }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={cartItem.imageUrl} alt="img" />
    </div>

    <span className="name"> {cartItem.name}</span>
    <span className="quantity">
      <div onClick={() => removeItem(cartItem)} className="arrow">
        &#10094;
      </div>
      <span className="value"> {cartItem.quantity} </span>
      <div onClick={() => addItem(cartItem)} className="arrow">
        &#10095;
      </div>
    </span>

    <span className="price"> {cartItem.price}</span>
    <div onClick={() => clearItemFromCart(cartItem)} className="remove-button">
      &#10005;
    </div>
  </div>
);

export default connect(
  null,
  { clearItemFromCart, addItem, removeItem }
)(CheckoutItem);

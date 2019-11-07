import React from "react";
import "./cart-dropdown.styles.scss";
import CustomButton from "./../custom-button/custom-button.component";
import { connect } from "react-redux";
import CartItem from "./../cart-item/cart-item.component";
import { selectCartItems } from "./../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCartVisibility } from "../../redux/cart/cart.actions";
const CartDropdown = ({ cartItems, history, toggleCartVisibility }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message"> No items in cart</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        toggleCartVisibility();
      }}
    >
      Go to Checkout
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(
  connect(
    mapStateToProps,
    { toggleCartVisibility }
  )(CartDropdown)
);

import React from "react";
import "./cart-dropdown.styles.scss";
import { CustomButton } from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item";
import { selectCartItems } from "../../redux/cart/cart-selector";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
const CartDropDown = ({ cartItems,history,dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.length ? 
          cartItems.map((cartItem) => (
          <CartItem id={cartItem.id} item={cartItem} />
        )) : <p className="empty-message">Your Cart is empty.</p>}
      </div>
      <CustomButton onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems:selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropDown));

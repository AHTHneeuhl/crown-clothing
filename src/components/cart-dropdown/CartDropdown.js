import { connect } from "react-redux";
import CartItem from "../cart-item/CartItem";
import CustomButton from "../custom-button/CustomButton";
import "./CartDropdown.styles.scss";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems &&
          cartItems.map((item) => <CartItem key={item.key} item={item} />)}
      </div>
      <CustomButton>Checkout</CustomButton>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropdown);

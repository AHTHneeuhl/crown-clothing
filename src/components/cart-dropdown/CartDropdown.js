import CustomButton from "../custom-button/CustomButton";
import "./CartDropdown.styles.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton>Checkout</CustomButton>
    </div>
  );
};

export default CartDropdown;

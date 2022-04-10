import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cartSelectors";
import { withRouter } from "../../helpers/withRouter";
import CartItem from "../cart-item/CartItem";
import CustomButton from "../custom-button/CustomButton";
import { toggleCart } from "../../redux/cart/cartActions";
import "./CartDropdown.styles.scss";

const CartDropdown = ({ cartItems, navigate, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          navigate("/checkout");
          dispatch(toggleCart());
        }}
      >
        Checkout
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));

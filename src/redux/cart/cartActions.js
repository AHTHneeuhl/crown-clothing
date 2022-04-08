export const CartActionTypes = {
  TOGGLE_CART: "TOGGLE_CART",
};

export const toggleCart = (user) => ({
  type: CartActionTypes.TOGGLE_CART,
});

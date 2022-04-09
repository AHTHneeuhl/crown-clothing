export const CartActionTypes = {
  TOGGLE_CART: "TOGGLE_CART",
  ADD_ITEM: "ADD_ITEM",
};

export const toggleCart = () => ({
  type: CartActionTypes.TOGGLE_CART,
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

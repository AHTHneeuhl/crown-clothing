export const CartActionTypes = {
  TOGGLE_CART: "TOGGLE_CART",
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
  CLEAR_ITEM_FROM_CART: "CLEAR_ITEM_FROM_CART",
};

export const toggleCart = () => ({
  type: CartActionTypes.TOGGLE_CART,
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const clearItem = (item) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const removeItem = (item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});

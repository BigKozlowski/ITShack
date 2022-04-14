export const addItemToCart = (cartItems: cartItem[], itemToAdd: item) => {
  const existingItem = cartItems.find((cartItem) => cartItem.id === itemToAdd.id);

  if (existingItem) {
    return cartItems.map((cartItem) => {
      return cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1, totalAmount: cartItem.totalAmount + itemToAdd.price }
        : cartItem;
    });
  }

  return [...cartItems, { ...itemToAdd, quantity: 1, totalAmount: itemToAdd.price }];
};

export const getCart = () => {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
}

export const addToCart = (item, available_quantity) => {
    const cart = getCart();
    const existingItem = cart.find((i) => i.id === item.id);
    if (existingItem) {
      if(existingItem.quantity == available_quantity){return}
      existingItem.quantity += 1;
    } else {
      cart.push({ ...item, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
}

export const removeFromCart = (item) => {
    const cart = getCart()
  
    const foundIndex = cart.findIndex((cartItem) => cartItem.id === item.id)
  
    if (foundIndex !== -1) {
      const foundItem = cart[foundIndex]
      if (foundItem.quantity > 1) {
        foundItem.quantity -= 1
      } else {
        cart.splice(foundIndex, 1)
      }
      localStorage.setItem('cart', JSON.stringify(cart))
    }
}

export const clearCart = ()=>{
    localStorage.removeItem("cart")
}

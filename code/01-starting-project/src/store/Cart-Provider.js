import CartContext from "./cart-context"


const addItemTOCartHandler = (item) => {

}

const removeItemFromCartHandler = (id) => {

}




const CartProvider= props => {

  const cartContext = {
      items: [],
      totalAmount: 0,
      additem: addItemTOCartHandler,
      removeItem: removeItemFromCartHandler
  }
  
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
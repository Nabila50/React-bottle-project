/**
 * 1. to get something from local storage, you will get it as a string
 * 2. convert this to JS object/ array
 */

const getCartFromLocalStorage = () =>{
    const storedCartString = localStorage.getItem('cart');

    if(storedCartString){
        const storedCart = JSON.parse(storedCartString);
        return storedCart;

    }
    return [];
}
 



const saveCartToLocalStorage = cart =>{
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringify);
}

const addItemToCartLocalStorage =  id =>{
    const cart = getCartFromLocalStorage();
    // cart.push(id); another way is....

    const newCart = [...cart, id];
    // Save new cart to the local storage
    saveCartToLocalStorage(newCart);

}

// Items remove from local storage

const removeFromLocalStorage = id =>{
    const storedCart = getCartFromLocalStorage();
    const remainingCart = storedCart.filter(storedId => storedId !==id);
    saveCartToLocalStorage(remainingCart);
}
 
export {getCartFromLocalStorage as getStoredCart, 
    addItemToCartLocalStorage as addToStoredCart,
    removeFromLocalStorage as removeFromCart
};
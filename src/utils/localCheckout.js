export const getLocalCheckout = () => JSON.parse(localStorage.getItem('checkout'));

export const setLocalCheckout = (item) => localStorage.setItem('checkout', item);

export const clearLocalCheckout = () => localStorage.removeItem('checkout');

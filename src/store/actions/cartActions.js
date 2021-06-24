export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_TO_CART = "REMOVE_TO_CART";

export function addToCart(product) {
  //redux Action yapıldığında obje istiyor
  return {
    type: ADD_TO_CART, //gönderilen aksiyon
    payload: product, //state i etkileyecek veri örneğin 5
  };
}
export function removeToCart(product) {
  return {
    type: REMOVE_TO_CART,
    payload: product,
  };
}

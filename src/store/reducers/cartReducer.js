//STATE SON HALİ: GÖNDERDİĞİM AKSİYONA GÖRE

import { ADD_TO_CART, REMOVE_TO_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems";

const initialState = {
  cartItems: cartItems,
};
export default function cartReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_TO_CART:
      let product = state.cartItems.find((c) => c.product.id === payload.id);
      if (product) {
        product.quantity++;
        return { ...state };
        //referansı değiştirmeliyiz, yeni cartItems dönmüş oluyor
      } else {
        return {
          //initialstatede başka default stateler varsa ...state bunları ayırır
          //olanlarıda korumak için yeni array oluşturup üzerine yazarız
          ...state, //bu spread operatörü diziyi objelerine ayırır
          cartItems: [...state.cartItems, { quantity: 1, product: payload }],
          //bu spread operatörü ise ayrılan objeler ile yeni bir array oluşturur
          //AMAÇ YENİ REFERENCE OLUŞTURMAK
        };
      }
    case REMOVE_TO_CART:
      //Burası eşleşmeyenler ile yeni bir array oluşturur
      return {
        ...state,
        cartItems: state.cartItems.filter((c) => c.product.id !== payload.id),
      };

    default:
      return state;
  }
}

//STATELERİ TOPLADIĞIM YER
//KENDİME GÖRE İSİMLERİ DEĞİŞTİRDİM

import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";

//BURADA VARSA UYGULAMADA KULLANILABİLİR OLACAK
const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;

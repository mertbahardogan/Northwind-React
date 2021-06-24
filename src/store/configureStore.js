import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducer from "./rootReducer";

export function configureStore() {
  //createStore redux store oluşturur.
  return createStore(rootReducer, devToolsEnhancer()); 
}

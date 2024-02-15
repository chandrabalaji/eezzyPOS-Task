import { combineReducers } from "redux";

import { createStore } from "redux";
import reducer from "./reducer";
const rootReducer = combineReducers({
  categorys: reducer, // assign the data stored variables
  products: reducer,
  SelectedProductList: reducer,
  totalcost: reducer,
});

export const store = createStore(rootReducer);

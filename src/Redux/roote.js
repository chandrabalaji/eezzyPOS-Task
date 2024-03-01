import { combineReducers } from "redux";

import { createStore } from "redux";
import reducer from "./reducer";
import loginreducer from "./loginAuth/reducer";
import orderreducer from "./Orders/reducer";
const rootReducer = combineReducers({
  categorys: reducer,
  products: reducer,
  SelectedProductList: reducer,
  totalcost: reducer,
  pendingOrders: orderreducer,
  Userinfo: loginreducer,
});

export const store = createStore(rootReducer);

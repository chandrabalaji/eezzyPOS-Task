import { Pendingorder, Kotorder, Transaction } from "./Action";

const initialState = {
  pendingOrders: [],
  KotOrders: [],
  transList: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case Pendingorder:
      return { ...state, pendingOrders: payload };
    case Kotorder:
      return { ...state, KotOrders: payload };
    case Transaction:
      return { ...state, transList: payload };

    default:
      return state;
  }
};

export const pendingOrdersArray = (state) => state.pendingOrders;

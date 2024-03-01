import { Pendingorder, Kotorder } from "./Action";

const initialState = {
  pendingOrders: [],
  KotOrders: [],
};

export default (state = initialState, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case Pendingorder:
      return { ...state, pendingOrders: payload };
    case Kotorder:
      return { ...state, KotOrders: payload };

    default:
      return state;
  }
};

export const pendingOrdersArray = (state) => state.pendingOrders;

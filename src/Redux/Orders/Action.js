export const Pendingorder = "Pendingorder";
export const Kotorder = "Kotorder";

export const PendingOrderAction = (payload) => {
  return {
    type: Pendingorder,
    payload: payload,
  };
};
export const KotOrderAction = (payload) => {
  return {
    type: Kotorder,
    payload: payload,
  };
};

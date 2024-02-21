export const AddProduct = "AddProduct";
export const deleteProduct = "deleteProduct";
export const Addcategory = "Addcategory";
export const Selectedproducts = "Selectedproducts";
export const totalcost = "totalcost";
export const decrementitem = "decrementitem ";
export const Cleareitem = "Cleareitem ";

// actions --//

export const CategoryAction = (payload) => {
  return {
    type: Addcategory,
    payload: payload,
  };
};

export const productAction = (payload) => {
  return {
    type: AddProduct,
    payload: payload,
  };
};
export const CleareAction = () => {
  return {
    type: Cleareitem,
    payload: [],
  };
};
export const SelectedAction = (payload) => {
  return {
    type: Selectedproducts,
    payload: payload,
  };
};
export const DecrementAction = (payload) => {
  return {
    type: decrementitem,
    payload: payload,
  };
};
export const deleteAction = (payload) => {
  return {
    type: deleteProduct,
    payload: payload,
  };
};
export const totalcostAction = (payload) => {
  return {
    type: totalcost,
    payload: payload,
  };
};

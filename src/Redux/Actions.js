export const AddProduct = "AddProduct";
export const deleteProduct = "deleteProduct";
export const Addcategory = "Addcategory";
export const Selectedproducts = "Selectedproducts";
export const totalcost = "totalcost";

// actions --//

export const CategoryAction = (payload) => {
  return {
    type: Addcategory,
    payload: payload,
  };
};

export const productAction = (payload) => {
  // console.log("prductActioncalled", payload);
  return {
    type: AddProduct,
    payload: payload,
  };
};
export const SelectedAction = (payload) => {
  // console.log("prductActioncalled", payload);
  return {
    type: Selectedproducts,
    payload: payload,
  };
};
export const deleteAction = (payload) => {
  // console.log("prductActioncalled", payload);
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

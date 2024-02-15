import {
  AddProduct,
  Addcategory,
  Selectedproducts,
  deleteProduct,
  totalcost,
} from "./Actions";

const initialState = {
  categorys: [],
  products: [],
  SelectedProductList: [],
  totalcost: 0,
};

export default (state = initialState, { type, payload }) => {
  // console.log("reducer-category", payload);
  switch (type) {
    case Addcategory:
      // console.log("reducer-munu", payload);
      return { ...state, categorys: payload };
    case AddProduct:
      // console.log("reducer-munu", payload);
      return { ...state, products: payload };
    case Selectedproducts:
      // console.log(payload.prod_item[0].quantity);
      console.log(payload.id);

      let existingProduct = state.SelectedProductList.find(
        (pro) => pro.id === payload.id
      );

      return existingProduct
        ? {
            //if
            ...state,
            SelectedProductList: state.SelectedProductList.map((pro) =>
              pro.id === existingProduct.id
                ? {
                    ...pro,

                    available_qty: pro.available_qty + 1,
                  }
                : pro
            ),
          }
        : {
            //else
            ...state,
            SelectedProductList: [
              ...state.SelectedProductList,
              {
                ...payload,

                available_qty: 1,
              },
            ],
          };

    case deleteProduct:
      return {
        ...state,
        SelectedProductList: state.SelectedProductList.filter(
          (prod) => prod.id !== payload
        ),
      };
    case totalcost:
      return {
        ...state,
        totalcost: payload,
      };
    default:
      return state;
  }
};

export const categorys = (state) => state.categorys;
export const productslist = (state) => state.products;
export const SelectedProductList = (state) => state.SelectedProductList;
export const Totalcost = (state) => state.totalcost;

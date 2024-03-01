import {
  AddProduct,
  Addcategory,
  Selectedproducts,
  deleteProduct,
  totalcost,
  decrementitem,
  Cleareitem,
  SelectPendingItem,
} from "./Actions";

const initialState = {
  categorys: [],
  products: [],
  SelectedProductList: [],
  totalcost: 0,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case Addcategory:
      return { ...state, categorys: payload };
    case AddProduct:
      return { ...state, products: payload };
    case Cleareitem:
      return { ...state, SelectedProductList: payload };
    case SelectPendingItem:
      return { ...state, SelectedProductList: payload };
    case Selectedproducts:
      let existingProduct = state.SelectedProductList.find(
        (pro) => pro.id === payload.id
      );

      if (existingProduct) {
        // If product already exists, increase the available_qty
        return {
          ...state,
          SelectedProductList: state.SelectedProductList.map((pro) => {
            if (pro.id === existingProduct.id) {
              return {
                ...pro,
                available_qty: pro.available_qty + 1,
              };
            }
            return pro;
          }),
        };
      } else {
        // If product doesn't exist, add it with available_qty set to 1
        return {
          ...state,
          SelectedProductList: [
            ...state.SelectedProductList,
            { ...payload, available_qty: 1 },
          ],
        };
      }

    case decrementitem:
      return {
        ...state,
        SelectedProductList: state.SelectedProductList.map((pro) => {
          if (pro.id === payload) {
            return {
              ...pro,
              available_qty: pro.available_qty >= 2 ? pro.available_qty - 1 : 1,
            };
          } else {
            return pro;
          }
        }),
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

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   products: [],
//   SelectedProduct: [],
// };
// export const productSlice = createSlice({
//   name: "product",
//   initialState,
//   reducers: {
//     getProducts: (state, action) => {
//       state.products = action.payload.GetProducts;
//     },

//     ToggleProducts: (state, action) => {
//       // console.log(action.payload.type);

//       // console.log(action.payload.payload);
//       switch (action.payload.type) {
//         case "AddProduct":
//           return {
//             ...state,
//             SelectedProduct: [
//               ...state.SelectedProduct,
//               action.payload.payload.SelectProducts,
//             ],
//           };
//         case "deleteProduct":
//           return {
//             ...state,
//             SelectedProduct: state.SelectedProduct.filter(
//               (prod) => prod.id !== action.payload.payload.deleteId
//             ),
//           };
//         default:
//           return state;
//       }
//     },
//   },
// });
// // action.payload.SelectProducts
// export const { getProducts } = productSlice.actions;
// export const { ToggleProducts } = productSlice.actions;
// export const products = (state) => state.product.products;
// export const SelectedProduct = (state) => state.product.SelectedProduct;
// export default productSlice.reducer;

import React from "react";
import { IoSearch } from "react-icons/io5";
import percentage from "../Assets/images/percentage.png";
import kot from "../Assets/images/Chef hat.png";
import { useQuery, gql } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import {
  ToggleProducts,
  getProducts,
  products,
} from "../features/others/productSlice";
import { useEffect } from "react";
import veg from "../Assets/images/veg.png";
import { GET_PRODUCTS } from "../constant";
import { productAction, SelectedAction } from "../Redux/Actions";
import { productslist } from "../Redux/reducer";
const Menulist = () => {
  const Allproduct = useSelector(productslist);
  const Dispatch = useDispatch();

  const { data, error, loading } = useQuery(GET_PRODUCTS, {
    variables: {
      business_id: 1,
      cat_id: 0,
      offset: 0,
      outlet_id: 1,
    },
  });

  useEffect(() => {
    Dispatch(productAction(data));
  }, [data]);

  const products = Allproduct?.products?.getProducts?.data;
  // console.log(data);

  const handleSelect = (data) => {
    Dispatch(SelectedAction(data));
  };


  // const handleSelect = (data) => {
  //   Dispatch(
  //     SelectedAction({
  //       type: "AddProduct",
  //       payload: {
  //         SelectProducts: data,
  //       },
  //     })
  //   );
  // console.log(data);
  return (
    <div className="menulist-container">
      <header>
        <input type="text" placeholder="Enter product Name to Search" />
        <div>
          <div className="search-logo">
            <IoSearch />
          </div>
        </div>
        <div>
          <div className="header-border">
            <img src={percentage} alt="" />
            <p>combo</p>
          </div>
        </div>
        <div>
          <div className="KOT">
            <img src={kot} alt="" />

            <p>KOT</p>
          </div>
        </div>
      </header>
      <div className="menulist">
        {products?.map((pro) => (
          <div className="menu" key={pro.id} onClick={() => handleSelect(pro)}>
            <h4>{pro.prod_name}</h4>
            <div className="menuprice">
              <h4>
                £ <span>{pro.price}</span>
              </h4>
              <img src={veg} alt="" />
            </div>
          </div>
        ))}
        {/* <div
          className="menu"
          onClick={() =>
            handleSelect({ nam: "Baby corn Manchurian", price: 20, id: 1 })
          }
        >
          <h4>Baby corn Manchurian</h4>
          <div className="menuprice">
            <h4>
              £ <span>20.00</span>
            </h4>
            <img src={veg} alt="" />
          </div>
        </div>
        <div
          className="menu"
          onClick={() => handleSelect({ nam: "dosa", price: 35, id: 2 })}
        >
          <h4>Baby corn Manchurian</h4>
          <div className="menuprice">
            <h4>
              £ <span>35.00</span>
            </h4>
            <img src={veg} alt="" />
          </div>
        </div>
        <div
          className="menu"
          onClick={() => handleSelect({ nam: "parotta", price: 45, id: 3 })}
        >
          <h4>Baby corn Manchurian</h4>
          <div className="menuprice">
            <h4>
              £ <span>45.00</span>
            </h4>
            <img src={veg} alt="" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

{
  /* <div className="menu">
  <h4>Baby corn Manchurian</h4>
  <div>
    <h4>
      £ <span>35.00</span>
    </h4>{" "}
    <input type="checkbox" name="" id="" />
  </div>
</div>; */
}
export default Menulist;

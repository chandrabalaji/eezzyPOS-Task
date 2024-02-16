import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import percentage from "../Assets/images/percentage.png";
import kot from "../Assets/images/Chef hat.png";
import { useQuery, gql } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
// import {
//   ToggleProducts,
//   getProducts,
//   products,
// } from "../features/others/productSlice";
import { useEffect } from "react";
import veg from "../Assets/images/veg.png";
import nonveg from "../Assets/images/non-veg.png";

import { GET_PRODUCTS } from "../constant";
import { productAction, SelectedAction } from "../Redux/Actions";
import { productslist } from "../Redux/reducer";
const Menulist = () => {
  const [search, setsearch] = useState("");
  const Allproduct = useSelector(productslist);
  const Dispatch = useDispatch();
  const products = Allproduct?.products?.getProducts?.data;

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

  const Searchproducts = search
    ? products &&
      products.filter((pro) =>
        pro.prod_name
          .toLowerCase()
          .replace(/\s+/g, "")
          .includes(search.toLowerCase().replace(/\s+/g, ""))
      )
    : products;
  console.log(Searchproducts);

  const handleSelect = (data) => {
    Dispatch(SelectedAction(data));
  };

  return (
    <div className="menulist-container">
      <header>
        <input
          type="text"
          placeholder="Enter product Name to Search"
          value={search}
          onChange={(e) => setsearch(e.target.value)}
        />
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
        {Searchproducts && Searchproducts.length ? (
          Searchproducts?.map((pro) => (
            <div
              className="menu"
              key={pro.id}
              onClick={() => handleSelect(pro)}
            >
              <h4>{pro.prod_name}</h4>
              <div className="menuprice">
                <h4>
                  £ <span>{pro.price}</span>
                </h4>
                <img src={pro.type === "Veg" ? veg : nonveg} alt="" />
              </div>
            </div>
          ))
        ) : (
          <h1>Not</h1>
        )}
      </div>
    </div>
  );
};

export default Menulist;

// redux toolkit  dispatch

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

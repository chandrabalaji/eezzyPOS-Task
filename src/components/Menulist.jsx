import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import percentage from "../Assets/images/percentage.png";
import kot from "../Assets/images/Chef hat.png";
import { useQuery, gql } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import veg from "../Assets/images/veg.png";
import nonveg from "../Assets/images/non-veg.png";
import { Link } from "react-router-dom";
import { GET_PRODUCTS, handleSelect } from "../constant";
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
  // console.log(Searchproducts);

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
          <div className="header-border ">
            <img src={percentage} alt="" />
            <p>combo</p>
          </div>
        </div>
        <div>
          <Link className="KOT" to='/KotKitchen'>
            <img src={kot} alt="" />

            <p>KOT</p>
          </Link>
        </div>
      </header>
      <div className="menulist relative">
        {Searchproducts && Searchproducts.length ? (
          Searchproducts?.map((pro) => (
            <div
              className="menu"
              key={pro.id}
              onClick={() => handleSelect(pro)}
            >
              <p>{pro.prod_name}</p>
              <div className="menuprice">
                <p>
                  £ <span>{pro.price}</span>
                </p>
                <img src={pro.type === "Veg" ? veg : nonveg} alt="" />
              </div>
            </div>
          ))
        ) : (
          <h4>No Products</h4>
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

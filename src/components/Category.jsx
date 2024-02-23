import React, { useEffect } from "react";
import Createbutton from "./Createbutton";
import Menulist from "./Menulist";
import Billing from "./Billing";
import Footer from "./Footer";
import log from "../Assets/images/Group 370.png";
import heart from "../Assets/images/heart 1.png";
import vr from "../Assets/images/rectangle's.png";
import { useDispatch, useSelector } from "react-redux";
// import {
//   AddCategory,
//   CategoriesNames,
// } from "../features/category/categorySlice";
import { GET_CATEGORIES } from "../constant";
import { CategoryAction } from "../Redux/Actions";
import { categorys } from "../Redux/reducer";
import { useQuery } from "@apollo/client";

const Category = () => {
  const Dispatch = useDispatch();
  // const AllCategory = useSelector(CategoriesNames);
  const AllCategoryreducer = useSelector(categorys);
  const AllCategory = AllCategoryreducer?.categorys.getAllCategory;
  // console.log("result", AllCategory);

  const { data, error, loading } = useQuery(GET_CATEGORIES, {
    variables: {
      business_id: 1,
      cat_id: 0,
      offset: 0,
      outlet_id: 1,
    },
  });

  useEffect(() => {
    if (data && data.getAllCategory) {
      // console.log("logged");
      Dispatch(CategoryAction(data));
    }
  }, [data]);

  return (
    <div className="containers">
      <div className="category-containers">
        <div className="category">
          <div className="category-head">
            <div id="active">
              <img src={log} alt="" />
            </div>
            <img src={vr} alt="" />
            <div>
              <img src={heart} alt="" />
            </div>
          </div>
          {AllCategory &&
            AllCategory?.map((cat) => {
              return (
                <Createbutton
                  name={cat.cat_name}
                  color={cat.color_code}
                  key={cat.id}
                />
              );
            })}
        </div>
        <Menulist />
        <Billing />
      </div>
      <Footer />
    </div>
  );
};

export default Category;

import React, { useEffect, useReducer, useState } from "react";
import wifi from "../Assets/images/Icon.png";
import cus from "../Assets/images/Group 793.png";
import use from "../Assets/images/User.png";
import hand from "../Assets/images/hand 1.png";
import pending from "../Assets/images/pending.png";
import clear from "../Assets/images/file.png";
import kot from "../Assets/images/Vector (1).png";
import pay from "../Assets/images/pay.png";
import del from "../Assets/images/delete.png";
// import {
//   SelectedProduct,
//   ToggleProducts,
// } from "../features/others/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { SelectedProductList } from "../Redux/reducer";
import { deleteAction, totalcostAction } from "../Redux/Actions";
import { Link } from "react-router-dom";

const Billing = () => {
  const Dispatch = useDispatch();
  const selectItemsreducer = useSelector(SelectedProductList);
  const selectItems = selectItemsreducer.SelectedProductList;
  const [TotalPrice, SetTotalPrice] = useState(0);
  useEffect(() => {
    const Price = selectItems?.reduce((acc, obj) => {
      // console.log(obj);
      return Number(acc) + Number(obj.price * obj.available_qty);
    }, 0);
    Dispatch(totalcostAction(Price.toFixed(0)));
    SetTotalPrice(Price.toFixed(0));
  }, [selectItems]);

  // console.log(totalcost);
  const handleDelete = (id) => {
    Dispatch(deleteAction(id));
    // console.log(id);
  };
  return (
    <div className="billing-container">
      <div className="billing-head">
        <p>Take Away</p>
        <div className="img-div">
          <img src={wifi} alt="" />
          <img src={cus} alt="" />
          <img src={use} alt="" />
        </div>
      </div>
      <div className="billing-lable">
        <p>Bill No:1</p>
      </div>
      <div className="bill-items">
        {selectItems &&
          selectItems?.map((item, index) => (
            <div
              className={index % 2 ? "bill-item" : "bill-item black"}
              key={item.id}
            >
              <div className="bill-itemProduct-div">
                <p>{item?.prod_name}</p>
                <span>x {item?.available_qty}</span>
              </div>
              <div className="bill-itemPrice">
                <span> &#163;{item?.price} </span>
                <button onClick={() => handleDelete(item.id)}>
                  <img src={del} alt="" />
                </button>
              </div>
            </div>
          ))}
      </div>
      <div id="generic">
        <button>Generic</button>
      </div>
      <div className="billAmount">
        <div>
          <div className="bill-cat">
            <p>Sub Total</p>
            <p> {`£  ${TotalPrice}`}</p>
          </div>
          <div className="bill-cat">
            <p>VAT 3%</p>
            <p> &#163; 0.00</p>
          </div>
          <div className="bill-cat  coupen">
            <p>Coupon Discount</p>
            <p> &#163; 0</p>
          </div>
        </div>
        <div className="bill-cat total">
          <p>
            <b>Total</b>
          </p>
          <p> {`£  ${TotalPrice}`}</p>
        </div>
      </div>
      <footer className="footer">
        <div className="btn">
          <button id="hold">
            <img src={hand} alt="" />
          </button>
          <p>Hold</p>
        </div>
        <div className="btn">
          <button id="pending">
            <img src={pending} alt="" />
          </button>
          <p>Pending</p>
        </div>
        <div className="btn">
          <button id="clear">
            <img src={clear} alt="" />
          </button>
          <p>Clear</p>
        </div>

        <div className="btn">
          <button id="send">
            <img src={kot} alt="" />
          </button>
          <p>Send Kot</p>
        </div>
        <div className="btn">
          <Link id="pay" to="/cash">
            <img src={pay} alt="" />
          </Link>
          <p>Pay</p>
        </div>
      </footer>
    </div>
  );
};

export default Billing;

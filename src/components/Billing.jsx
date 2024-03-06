import React, { useEffect, useReducer, useState } from "react";
import wifi from "../Assets/images/Icon.png";
import cus from "../Assets/images/customer.svg";
import use from "../Assets/images/User.png";
import hand from "../Assets/images/hand 1.png";
import pending from "../Assets/images/pending.png";
import clear from "../Assets/images/file.png";
import kotimg from "../Assets/images/Vector (1).png";
import pay from "../Assets/images/pay.png";
import del from "../Assets/images/delete.png";

import { useDispatch, useSelector } from "react-redux";
import { SelectedProductList } from "../Redux/reducer";
import {
  deleteAction,
  totalcostAction,
  SelectedAction,
  DecrementAction,
  CleareAction,
} from "../Redux/Actions";
import { Link } from "react-router-dom";
import notes from "../Assets/images/Notes.svg";
import dropdown from "../Assets/images/Icon (1).svg";
import icon from "../Assets/images/Icon.svg";
import { HoldProductInsert } from "../APIs/RESTapi";

const Billing = () => {
  const Draft = "Draft";
  const kot = "kot";
  const Dispatch = useDispatch();
  const selectItemsreducer = useSelector(SelectedProductList);
  const selectItems = selectItemsreducer.SelectedProductList;
  const [TotalPrice, SetTotalPrice] = useState(0);
  const [itemMod, SetitemMod] = useState(null);

  useEffect(() => {
    const Price = selectItems?.reduce((acc, obj) => {
      return (
        Number(acc) +
        Number(
          obj?.available_qty
            ? obj?.price * obj?.available_qty
            : obj?.price * obj.quantity
        )
      );
    }, 0);
    Dispatch(totalcostAction(Price.toFixed(0)));
    SetTotalPrice(Price.toFixed(0));
  }, [selectItems]);

  const handleDelete = (id) => {
    Dispatch(deleteAction(id));
  };

  const handleDropdown = (index) => {
    SetitemMod((item) => (item === index ? null : index));
  };
  const handleSendKot = () => {
    HoldProductInsert(selectItems, TotalPrice, kot);
  };
  const handleholditems = () => {
    HoldProductInsert(selectItems, TotalPrice, Draft);
  };
  return (
    <div className="billing-container ">
      <div className="billing-head pt-3">
        <p>Take Away</p>
        <div className="img-div">
          <img src={wifi} alt="" />
          <img src={cus} alt="" />
          <img src={use} alt="" />
        </div>
      </div>
      <div className="billing-lable mt-3">
        <p>Bill No:1</p>
      </div>
      <div className="bill-items">
        {selectItems &&
          selectItems?.map((item, index) => (
            <div
              className={
                index % 2 ? "bill-item-div p-3" : "bill-item-div black p-3"
              }
              key={index}
            >
              <div className="bills">
                <button onClick={() => handleDropdown(index)}>
                  <img src={dropdown} alt="" />
                </button>
                <div className="bill-item">
                  <div className="bill-itemProduct-div">
                    <p>{item?.prod_name}</p>
                    <span>
                      x
                      {item?.available_qty
                        ? item?.available_qty
                        : item.quantity}
                    </span>
                  </div>
                  <div className="bill-itemPrice">
                    <span>
                      &#163;
                      {item?.available_qty
                        ? item.price * item?.available_qty
                        : item.price * item.quantity}
                    </span>
                    <button onClick={() => handleDelete(item.id)}>
                      <img src={del} alt="" />
                    </button>
                  </div>
                </div>
              </div>

              <div className={itemMod === index ? "bill-item-edit" : "D-none"}>
                <div className="item-modified-btn-div">
                  <button
                    id="decrease"
                    onClick={() => Dispatch(DecrementAction(item.id))}
                  >
                    -
                  </button>
                  <span>{item?.available_qty}</span>

                  <button onClick={() => Dispatch(SelectedAction(item))}>
                    +
                  </button>
                </div>
                <div>&#163;{item?.price}</div>
                <div id="edit-notes">
                  <img src={notes} alt="" />
                  <img src={icon} alt="" />
                </div>
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
        <div className="btn" onClick={handleholditems}>
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
          <button id="clear" onClick={() => Dispatch(CleareAction())}>
            <img src={clear} alt="" />
          </button>
          <p>Clear</p>
        </div>

        <div className="btn">
          <button id="send" onClick={handleSendKot}>
            <img src={kotimg} alt="" />
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

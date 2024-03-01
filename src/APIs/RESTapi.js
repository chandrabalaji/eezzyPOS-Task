import { AES } from "crypto-js";
import axios from "axios";

export const Axios = axios.create({
  baseURL: "https://dev-restaurant.eezzypos.com",
});

export const usertoken = (userinfo) => {
  // const userinfo = store.getState().Userinfo;
  console.log(userinfo);
  var ciphertext = AES.encrypt(
    JSON.stringify(userinfo.password),
    "EWEPOS@2021"
  ).toString();

  const userdetails = { ...userinfo, password: ciphertext };
  Postrequest(userdetails);
};

// login Auth

async function Postrequest(val) {
  try {
    const res = await Axios.post(`/api/v1/auth`, val);
    if (res.status === 200) {
      window.localStorage.setItem("userlogin", JSON.stringify(res.data));
    }
  } catch (error) {
    console.log(error.message);
  }
}

let userinfo = window.localStorage.getItem("userlogin");
export const token = userinfo ? JSON.parse(userinfo).token : null;
// console.log(token);

export const getAPICall = async (url, method, params) => {
  Axios({
    method: method,
    url,
    params,
    headers: {
      "content-type": "application/json",
      Accept: "application/json",
      token,
    },
  });
};

export const PostAPICall = async (url, method, params) => {
  return Axios({
    method: method,
    url,
    data: params,
    headers: {
      "content-type": "application/json",
      Accept: "application/json",
      token,
    },
  });
};

export const HoldProductInsert = async (items, TotalPrice) => {
  const payload = {
    balance: 0,
    biller_id: "2",
    business_id: "1",
    coupon_code: "",
    coupon_discount: 0,
    customer_id: 0,
    discount: "0",
    is_takeaway: 1,
    kotstatus: 4,
    log_session_id: "362",
    max_order_no: 8,
    miscellaneous: 0,
    miscellaneous_items: "[]",
    order_date: "2024-02-29",
    order_item: items,
    order_no: "1",
    outlet_id: "1",
    status: "Draft",
    sub_total: TotalPrice,
    tax: "0",
    total: TotalPrice,
    order_time: "18:00:13",
    order_type: 0,
    p_type: 0,
    redeem_points: 0,
    redeem_value: 0,
    split_bill_count: 0,
    table_id: 0,
    taxper: 8,
    terminal_id: "45",
    tip_amount: "0",
    tip_handling: "null",
    tip_percentage: "0.00",
    transaction_no: "",
    type: "coupon",
  };

  try {
    const res = await PostAPICall("/api/v1/order/insert", "POST", payload);
    console.log(res);
  } catch (error) {
    console.log(error.message);
  }
};

// export const handleKOT = async (items) => {
//   try {
//     const res = await PostAPICall("/api/v1/order/insert", "POST", payload);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

import { AES } from "crypto-js";
import axios from "axios";
//"http://192.168.29.129:8003"
export const Axios = axios.create({
  baseURL: "http://192.168.29.129:8004",
});

export const usertoken = (userinfo) => {
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

export const getAPICall = async (url, method, params) => {
  try {
    const res = Axios({
      method: method,
      url,
      params,
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
        token,
      },
    });
    return (await res).data;
  } catch (error) {
    return error.message;
  }
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

export const HoldProductInsert = async (items, TotalPrice, status) => {
  items.map((it) => console.log(it));
  const moditem = { ...items };
  const payload = {
    balance: 0,
    biller_id: "2",
    business_id: "1",
    coupon_code: "",
    coupon_discount: 0,
    customer_id: 0,
    discount: "0",
    given_amount: 0,
    is_takeaway: 1,
    kotstatus: 4,
    log_session_id: "83",
    max_order_no: 1,
    miscellaneous: 0,
    miscellaneous_items: "[]",
    order_date: "2024-03-05",
    order_item: items,
    order_no: "1",
    order_tax: [
      { tax_name: "VAT", tax_pct: "3", tax_id: "1", tax_amount: 1.08 },
    ], // *
    order_time: "09:55:52",
    order_type: 0,
    outlet_id: "1", // *
    p_type: 0,
    redeem_points: 0,
    redeem_value: 0,
    split_bill_count: 0,
    status: status, // *
    sub_total: TotalPrice,
    table_id: 0,
    tax: "1.08",
    taxper: 3,
    terminal_id: "45",
    tip_amount: "0",
    tip_handling: "null",
    tip_percentage: "0.00",
    total: TotalPrice,
    transaction_no: "",
    type: "coupon",
  };

  try {
    const res = await PostAPICall(
      "/api/v1/order/insert",
      "POST",
      JSON.stringify(payload)
    );
    // console.log(res);
  } catch (error) {
    console.log(error.message);
  }
};

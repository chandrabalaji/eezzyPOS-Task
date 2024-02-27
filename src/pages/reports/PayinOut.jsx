import React, { useState } from "react";
import arrow from "../../Assets/images/arrow.svg";
import arrow2 from "../../Assets/images/arrow2.svg";
import del from "../../Assets/images/delete.png";

const PayinOut = () => {
  const [paytype, setpaytype] = useState("payin");
  const [name, setname] = useState("");
  const [amount, setamount] = useState(0);
  const [Transactions, setaTransactions] = useState([]);

  const handletypebtn = (val) => {
    setpaytype(val);
  };

  const handledelete = (val) => {
    const filtertrans = Transactions.filter((trns) => trns.name !== val.name);
    setaTransactions(filtertrans);
  };
  const handlepayment = () => {
    const details = { name, amount, paytype };
    setaTransactions((trns) => trns.concat(details));
    setname("");
    setamount("");
  };
  return (
    <main className=" bg-dark-black w-10/12">
      <div className="flex space-x-3 p-4 ">
        <div className="custome-border p-4 w-1/2 h-[620px]  bg-lite-black text-white">
          <header>
            <p className="text-sm font-medium">Payin/PayOut Details </p>
          </header>
          <div className="flex justify-between mt-5 text-sm font-medium border-b-[.7px] border-gray-800 px-3 pb-2    ">
            <p>Transaction Name</p>
            <div className="flex space-x-16">
              <p>Amount</p>
              <p>Actions</p>
            </div>
          </div>
          <div className="mt-2 px-3">
            {Transactions &&
              Transactions.map((tr) => {
                return (
                  <div className="flex justify-between text-sm font-medium py-2 px-1 border-b-[.5px] border-gray-500">
                    <p className="text-xs">{tr.name}</p>
                    <div className="flex space-x-28 ">
                      <p>{tr.amount}</p>
                      <div className="flex items-center justify-center space-x-3">
                        <img
                          src={del}
                          alt=""
                          width={14}
                          height={14}
                          onClick={() => handledelete(tr)}
                        />
                        <img
                          src={tr.paytype === "payin" ? arrow2 : arrow}
                          alt=""
                          width={14}
                          height={14}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="custome-border bg-lite-black text-white w-1/2 p-4 ">
          <div className="grid   pb-4 ">
            <p className="text-sm font-medium">Starting Cash</p>
            <input
              type="number"
              name=""
              id=""
              className="text-md font-medium px-3 py-2 rounded-[4px]  bg-dark-black mt-2"
            />
            <div className="flex justify-between items-center">
              <label htmlFor="" className="text-sm flex items-center">
                <input type="checkbox" name="" id="" /> Apply Same amount daily
              </label>
              <button className="bg-blue-500 px-3 py-2 rounded-[5px]  mt-2">
                Apply
              </button>
            </div>
          </div>
          <hr />

          <div>
            <div className="flex mt-4 space-x-2">
              <button
                className={`flex items-center justify-between ${
                  paytype === "payin" ? "bg-blue-500" : "bg-gray-500"
                } w-1/2  rounded-[5px] px-5 py-2 text-sm font-medium`}
                onClick={() => handletypebtn("payin")}
              >
                PayIn
                <img src={arrow2} alt="" width={17} height={17} />
              </button>
              <button
                className={`flex items-center justify-between ${
                  paytype === "payout" ? "bg-blue-500" : "bg-gray-500"
                } w-1/2  rounded-[5px] px-5 py-2 text-sm font-medium`}
                onClick={() => handletypebtn("payout")}
              >
                PayOut
                <img src={arrow} alt="" width={17} height={17} />
              </button>
            </div>
            <div className="text-sm font-medium grid mt-4 gap-y-2">
              <p>Transaction Type</p>

              <span
                className={
                  paytype === "payin" ? "text-lite-green" : "text-red-600"
                }
              >
                {paytype}
              </span>
              <div className="grid gap-y-1">
                <label htmlFor="">Transaction Name</label>
                <input
                  type="text"
                  className="text-md font-medium px-3 py-2 rounded-[4px] bg-dark-black"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                  placeholder="Cash Deposit"
                />
              </div>
              <div className="grid gap-y-1">
                <label htmlFor="">Amount</label>
                <input
                  type="number"
                  className="text-md font-medium px-3 py-2 rounded-[4px]  bg-dark-black"
                  value={amount}
                  onChange={(e) => setamount(e.target.value)}
                />
              </div>
              <button
                className={`justify-self-end rounded-[5px] ${
                  name && amount ? "bg-blue-500" : "bg-blue-200"
                }  text-sm font-medium px-4 py-2 mt-2 `}
                onClick={handlepayment}
                disabled={name && amount ? false : true}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PayinOut;

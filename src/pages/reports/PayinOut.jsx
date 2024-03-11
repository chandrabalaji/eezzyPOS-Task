import React, { useEffect, useState } from "react";
import arrow from "../../Assets/images/arrow.svg";
import arrow2 from "../../Assets/images/arrow2.svg";
import del from "../../Assets/images/delete.png";
import { Get_query, Post_query } from "../../query";
import { GET_ALL_POSSETTING, POST_POSSETTING } from "../../constant";

const PayinOut = () => {
  const [type, settype] = useState("Payin");
  const [name, setname] = useState("");
  const [amount, setamount] = useState(0);
  const [Stratingamt, setStartingamt] = useState(0);
  const [Transactions, setaTransactions] = useState([]);

  const variables = {
    biller_id: 2,
    business_id: 1,
    id: "",
    outlet_id: 1,
    terminal_id: "45",
  };

  const fn = async () => {
    const { data } = await Get_query(GET_ALL_POSSETTING, variables);
    setaTransactions(data?.getAllPossettings.data);
  };
  useEffect(() => {
    fn();
  }, []);

  // set starting cash
  useEffect(() => {
    Transactions?.forEach((tr) => {
      if (tr.type === "Start") {
        setStartingamt(tr.amount);
      }
    });
  }, [Transactions]);

  const handletypebtn = (val) => {
    settype(val);
  };
  // console.log(Transactions);
  const handledelete = (val) => {
    const filtertrans = Transactions.filter((trns) =>
      trns.name ? trns.name !== val : trns.transaction_name !== val
    );
    setaTransactions(filtertrans);
  };
  const handlepayment = async () => {
    const variables = {
      amount: Number(amount),
      biller_id: 2,
      business_id: 1,
      is_all_day: "0",
      outlet_id: 1,
      terminal_id: "45",
      transaction_name: name,
      type: type,
    };

    const post = await Post_query(POST_POSSETTING, variables);
    // console.log(post);
    const details = { name, amount, type };
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
              Transactions.map((tr, index) => (
                <div
                  className="flex justify-between text-sm font-medium py-2 px-1 border-b-[.7px] border-gray-600"
                  key={index}
                >
                  <p className="text-xs">
                    {tr.transaction_name ? tr.transaction_name : tr.name}
                  </p>
                  <div className="flex space-x-28 ">
                    <p>{tr.amount}</p>
                    {tr.type !== "Start" ? (
                      <div className="flex items-center justify-center space-x-3">
                        <img
                          src={del}
                          alt=""
                          width={14}
                          height={14}
                          onClick={() => handledelete(tr)}
                        />
                        <img
                          src={tr.type === "Payin" ? arrow2 : arrow}
                          alt=""
                          width={14}
                          height={14}
                        />
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="custome-border bg-lite-black text-white w-1/2 p-4 ">
          <div className="grid   pb-4 ">
            <p className="text-sm font-medium">Starting Cash</p>
            <input
              type="number"
              name=""
              id=""
              className="text-sm font-medium px-3 py-2 rounded-[4px]  bg-dark-black mt-2 end text-end"
              value={Stratingamt}
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
                  type === "payin" ? "bg-blue-500" : "bg-gray-500"
                } w-1/2  rounded-[5px] px-5 py-2 text-sm font-medium`}
                onClick={() => handletypebtn("Payin")}
              >
                PayIn
                <img src={arrow2} alt="" width={17} height={17} />
              </button>
              <button
                className={`flex items-center justify-between ${
                  type === "payout" ? "bg-blue-500" : "bg-gray-500"
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
                  type === "payin" ? "text-lite-green" : "text-red-600"
                }
              >
                {type}
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

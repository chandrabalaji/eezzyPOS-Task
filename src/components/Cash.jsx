import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Billing from "./Billing";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import { Totalcost } from "../Redux/reducer";
import pound from "../Assets/images/pound-sterling 1.svg";
import credit from "../Assets/images/credit-cards-payment 1.svg";
import deletesvg from "../Assets/images/delete_backspace.svg";
import backbtn from "../Assets/images/Arrow left.png";
import qrsvg from "../Assets/images/qr-code (1) 1.svg";

const Cash = () => {
  const costreducer = useSelector(Totalcost);
  const cost = Number(costreducer.totalcost);
  const [cash, setcash] = useState(0);
  const [paise, setpaise] = useState(0);
  const [Balance, setBalance] = useState(0);
  // const Cashround = cash && ;

  console.log(cash);
  const calcNumber = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "00",
    "b",
    ".",
    "cancel",
  ];
  const currancy = ["1", "2", "5", "10", "20", "50", "100"];
  const paiseamt = ["1", "2", "5", "10", "20", "50"];
  const handleCalculator = (prev, val) => {
    if (val === ".") {
      return prev + ".";
    } else if (val === "cancel") {
      return 0;
    } else {
      return prev.slice(0, -1);
    }
  };

  const handlepaise = (prev,val) => {

      
    // Number(prev) + Number(`.${val}`)

  }
  useEffect(() => {
    let balanceamt =
      Number(cost) <= cash && cost !== 0 ? Number(cash) - cost : 0;
    setBalance(balanceamt);
  }, [cash]);
  return (
    <div className="cash-container">
      <div className="cash">
        <header>
          <div className="bill">
            <h3>Bill Payment</h3>
            <Link to="/home">
              <img src={backbtn} alt="" />
            </Link>
          </div>
          <div>
            <div className="type">
              <button>
                <img src={pound} alt="" />
                <span>Cash</span>
              </button>
              <button>
                <img src={credit} alt="" />
                <span>Card</span>
              </button>
              <button>
                <img src={qrsvg} alt="" />
                <span>UPI</span>
              </button>
            </div>
            <div className="bill-amt">
              <h3>Payable Amount</h3>
              <span>{cost}</span>
            </div>
          </div>
        </header>
        <main>
          <div className="calculator">
            <div>
              <h3>Cash Tendered {"($)"}</h3>
              <input type="text" name="" id="" value={Cash} />
            </div>
            {Number(cost) > cash && cash !== 0 ? (
              <p className="alert">
                Amount should be equal or greater than the total
              </p>
            ) : null}
            <div className="numbers">
              {calcNumber?.map((num) => (
                <button
                  onClick={() =>
                    setcash((prev) =>
                      prev
                        ? isNaN(num)
                          ? handleCalculator(prev, num)
                          : prev + num
                        : num
                    )
                  }
                >
                  {num}
                </button>
              ))}
            </div>
          </div>
          <div className="payment-div">
            <div className="currency">
              <h4>Currencies</h4>
              <h4>Currency</h4>
              <div>
                {currancy.map((val) => (
                  <button
                    onClick={() =>
                      setcash((prev) =>
                        prev ? Number(prev) + Number(val) : Number(val)
                      )
                    }
                  >
                    {val}
                  </button>
                ))}
              </div>
            </div>
            <div className="currency">
              <p>Coin</p>
              <div>
                {paiseamt.map((val) => (
                  <button
                    onClick={() =>
                      setcash((prev) =>
                        prev
                          ? handlepaise(prev,val)
                          : Number(`.${val}`)
                      )
                    }
                  >
                    <span>p</span> <span>{val}</span>
                  </button>
                ))}
                {/* <button>
                  <span>p</span> <span>1</span>
                </button>
                <button>
                  <span>p</span> <span>2</span>
                </button>
                <button>
                  <span>p</span> <span>5</span>
                </button>
                <button>
                  <span>p</span> <span>10</span>
                </button>
                <button>
                  <span>p</span> <span>20</span>
                </button>
                <button id="block">
                  <span>p</span> <span>50</span>
                </button> */}
              </div>
            </div>
            <div>
              <h3>Pay Details</h3>
              <div className="pay-details">
                <div>
                  <h4>Credited </h4>
                  <span>{`${cash}`}</span>
                </div>
                <div>
                  <h4>Balance</h4>
                  <span>{Balance}</span>
                </div>
              </div>
              <div className="bill-btn">
                <button>Split Bill</button>
                <button>Print Bill</button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
      <Billing />
    </div>
  );
};

export default Cash;

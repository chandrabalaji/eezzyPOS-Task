import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Billing from "./Billing";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import { Totalcost } from "../Redux/reducer";
import pound from "../Assets/images/pound-sterling 1.svg";
import credit from "../Assets/images/credit-cards-payment 1.svg";
import backbtn from "../Assets/images/Arrow left.png";
import qrsvg from "../Assets/images/qr-code (1) 1.svg";
import { calcNumber, currancy, paiseamt } from "../constant";
const Cash = () => {
  const costreducer = useSelector(Totalcost);
  const cost = Number(costreducer.totalcost);
  const [cash, setcash] = useState(0);
  const [paise, setpaise] = useState(0);
  const [Balance, setBalance] = useState(0);
  const [contant, setcontant] = useState("cash");

  const handleCalculator = (prev, val) => {
    // check if first input is number or not
    if (prev === 0 && !isNaN(val)) return val;
    // check if  input is number

    if (!isNaN(val)) {
      return prev + val;
    }

    if (val === "cancel") {
      return 0;
    } else if (val.key === "delete") {
      if (prev > 0) {
        if (prev.length === 1) {
          return 0;
        }
        return prev.slice(0, -1);
      } else {
        return 0;
      }
    } else {
      return prev + ".";
    }
  };

  const handlepaise = (prev, val) => {
    let amt = Number(prev) + Number(`.${val}`);

    return amt.toFixed(2);
  };
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
            <p>Bill Payment</p>
            <Link to="/home">
              <img src={backbtn} alt="" />
            </Link>
          </div>
          <div>
            <div className="type">
              <button
                onClick={() => setcontant("cash")}
                className={contant === "cash" && `${"active"}`}
              >
                <img src={pound} alt="" />
                <span>Cash</span>
              </button>
              <button
                onClick={() => setcontant("card")}
                className={contant === "card" && `${"active"}`}
              >
                <img src={credit} alt="" />
                <span>Card</span>
              </button>

              <button
                onClick={() => setcontant("upi")}
                className={contant === "upi" && `${"active"}`}
              >
                <img src={qrsvg} alt="" />
                <span>UPI</span>
              </button>
            </div>
            <div className="bill-amt">
              <p>Payable Amount</p>
              <span>£{cost}</span>
            </div>
          </div>
        </header>
        <main>
          {contant === "cash" ? (
            <>
              <div className="calculator">
                <div>
                  <p>Cash Tendered {"(£)"}</p>
                  <input type="text" name="" id="" value={cash} />
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
                        setcash((prev) => handleCalculator(prev, num))
                      }
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>
              <div className="payment-div">
                <div className="currency">
                  <p>Currencies</p>
                  <p>Currency</p>
                  <div>
                    {currancy.map((val) => (
                      <button
                        onClick={() =>
                          setcash((prev) =>
                            prev ? Number(prev) + Number(val) : Number(val)
                          )
                        }
                      >
                        £ {val}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="currency mb-4">
                  <p>Coin</p>
                  <div>
                    {paiseamt.map((val) => (
                      <button
                        onClick={() =>
                          setcash((prev) => handlepaise(prev, val))
                        }
                      >
                        <span>p</span> <span>{val}</span>
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h4>Pay Details</h4>
                  <div className="pay-details h-20 mt-4 flex flex-col justify-center">
                    <div>
                      <p>Credited </p>
                      <span>{`£ ${cash}`}</span>
                    </div>
                    <div>
                      <p>Balance</p>
                      <span>{`£ ${Balance}`}</span>
                    </div>
                  </div>
                  <div className="bill-btn">
                    <button>Split Bill</button>
                    <button>Print Bill</button>
                  </div>
                </div>
              </div>
            </>
          ) : contant === "card" ? (
            <div className="card">
              <h3>Pay Details</h3>
              <div>
                <p className="p-3">To Pay</p>
                <span>{`£ ${cost}`}</span>
              </div>
              <button>Pay</button>
            </div>
          ) : contant === "upi" ? (
            <div className="upi">
              <div>
                <p>Pay Type</p>
                <select name="" id="select">
                  <option value="">Gpay</option>
                  <option value="">Phonepe</option>
                  <option value="">Paytm</option>
                </select>
              </div>
              <div className="paydetails">
                <p>Pay Details</p>
                <div>
                  <p className="p-3">To Pay</p>
                  <span>{`£ ${cost}`}</span>
                </div>
              </div>
              <button>Pay</button>
            </div>
          ) : null}
        </main>
        <Footer />
      </div>
      <Billing />
    </div>
  );
};

export default Cash;

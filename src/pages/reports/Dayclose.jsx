import React, { useEffect, useState } from "react";
import printer from "../../Assets/images/Printer.svg";
import { Get_query } from "../../query";
import { GET_TRANSCATIONS } from "../../constant";
import { useDispatch } from "react-redux";
import { TransactionAction } from "../../Redux/Orders/Action";
const Dayclose = () => {
  const Dispatch = useDispatch();
  const [transacation, settransaction] = useState({});
  const [total, settotal] = useState(0);
  const gettransactions = async () => {
    const variables = {
      outlet_id: 1,
      business_id: 1,
      terminal_id: 45,
    };
    const { data } = await Get_query(GET_TRANSCATIONS, variables);
    // console.log(data?.transactionSummary.data);
    settransaction(data?.transactionSummary.data);
  };
  // console.log(transacation);
  useEffect(() => {
    gettransactions();
  }, []);

  useEffect(() => {
    const totalpayout = parseFloat(transacation?.payout?.payout_amount) || 0;

    let total = 0;
    for (const key in transacation) {
      if (transacation.hasOwnProperty(key) && key !== "payout") {
        const category = transacation[key];

        total += parseFloat(
          category.starting_amount ||
            category.payin_amount ||
            category.card_payments ||
            category.cash_payments ||
            category.upi_payments
        );
      }
    }
    settotal(total);
    Dispatch(TransactionAction(transacation));
  }, [transacation]);
  // console.log(transacation);
  return (
    <main className="bg-dark-black w-10/12">
      <div className="custome-border scroll bg-lite-black m-5 text-white p-3 h-[600px] overflow-scroll ">
        <div className=" flex justify-between px-4 mb-3">
          <p>Day </p>
          <img src={printer} alt="" width={20} height={20} />
        </div>
        <hr />
        <div className="day-closing grid gap-y-5  p-3 text-base font-medium">
          <div>
            <p>Starting Cash</p>
            <p>
              {transacation?.start?.starting_amount
                ? transacation?.start.starting_amount
                : 0}
            </p>
          </div>
          <div>
            <p>Payins</p>
            <p>
              {transacation?.payin?.payin_amount
                ? transacation?.payin.payin_amount
                : 0}
            </p>
          </div>
          <div>
            <p>Cash Payments</p>
            <p>
              {transacation?.cash?.cash_payments
                ? transacation.cash.cash_payments
                : 0}
            </p>
          </div>
          <div>
            <p>Card Payments</p>
            <p>
              {transacation?.card?.card_payments
                ? transacation?.card.card_payments
                : 0}
            </p>
          </div>
          <div>
            <p>UPI Payment</p>
            <p>
              {transacation?.upi?.upi_payments
                ? transacation.upi.upi_payments
                : 0}
            </p>
          </div>
          <hr />
          <div className=" justify-self-end">
            <p>0.00</p>
          </div>
          <div className="my-1">
            <p>PayOut</p>
            <p>
              {transacation?.payout?.payout_amount
                ? transacation.payout.payout_amount
                : 0}
            </p>
          </div>
          <hr />
          <div className="my-2">
            <p>Total</p>
            <p>0.00</p>
          </div>
          <hr />
          <div className="mb-2">
            <p>cash Available</p>
            <p className="bg-dark-blace ps-4 py-2">0</p>
          </div>
          <div>
            <p>Overage/Shortage</p>
            <p>0.00</p>
          </div>
          <button className="text-base font-medium px-3 py-2 justify-self-end bg-blue-600">
            Day Close
          </button>
        </div>
      </div>
    </main>
  );
};

export default Dayclose;

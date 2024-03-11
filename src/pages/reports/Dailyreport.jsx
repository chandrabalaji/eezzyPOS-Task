import React, { useEffect, useState } from "react";
import printer from "../../Assets/images/Printer.svg";
import { Get_query } from "../../query";
import { GET_SALESBY_CATEGORY, GET_SALES_SUMMARY } from "../../constant";
import { useSelector } from "react-redux";
import { pendingOrdersArray } from "../../Redux/Orders/reducer";

const Dailyreport = () => {
  const trnsList = useSelector(pendingOrdersArray);
  const [SalesSummary, SetSalesSummary] = useState(null);
  const [SalesCategory, SetSalesCategory] = useState(null);
  const [transacation, Settransacation] = useState(null);
  const salsevariables = {
    outlet_id: 1,
    business_id: 1,
    terminal_id: "45",
  };
  const categoryvariables = {
    outlet_id: 1,
    business_id: 1,
    terminal_id: "45",
  };

  const fn = async () => {
    const { data } = await Get_query(GET_SALES_SUMMARY, salsevariables);
    const { data: categorys } = await Get_query(
      GET_SALESBY_CATEGORY,
      categoryvariables
    );
    SetSalesSummary(data?.salesSummary.data);
    SetSalesCategory(categorys?.salesByCategory.data);
  };
  useEffect(() => {
    fn();
    Settransacation(trnsList.transList);
  }, []);
  // console.log(transacation);
  return (
    <main className="bg-dark-black w-10/12">
      <div className="grid grid-cols-2 grid-rows-2 gap-3 h-[600px] p-4 text-white">
        <div className="custome-border relative bg-lite-black  row-span-2">
          <header className="flex justify-between text-sm font-medium p-3">
            <p>Sales by Category</p>
            <div className="flex space-x-1 text-lite-green">
              <p>
                <span>0</span> Count
              </p>
              <p>
                <span>0</span> Total Sales
              </p>
            </div>
          </header>
          <section>
            <div className="flex items-center justify-between  mx-6  pb-2 text-sm font-medium border-b-[1px] border-gray-500">
              <p>Category</p>
              <p>Count</p>
              <p>Amount</p>
            </div>
            <div>
              {SalesCategory &&
                SalesCategory.map((cat) => (
                  <div
                    className="flex items-center  mx-7 py-3 text-xs font-medium border-b-[1px] border-gray-500"
                    key={cat.cat_id}
                  >
                    <p className="text-green-300  w-2/4">{cat.cat_name}</p>
                    <p className="w-1/4">{cat.count}</p>
                    <p className="text-right w-1/4">{cat.price}</p>
                  </div>
                ))}
            </div>
          </section>
          {/* <div className=" absolute top-1/2 left-48">
            <p>No Sales by Category Details</p>
          </div> */}
        </div>
        <div className="custome-border scroll bg-lite-black overflow-scroll">
          <header className="flex justify-between text-sm font-medium p-3">
            <p>Sales Summary</p>
            <div className="flex space-x-1 text-lite-green">
              <p>
                <span>0</span> Count
              </p>
              <p>
                <span>0</span> Total Sales
              </p>
            </div>
          </header>
          <div className="">
            <table className="w-[570px] box-border  space-y-2  mx-4 text-xs ">
              <thead>
                <tr>
                  <td>Sales Type</td>
                  <td>Count</td>
                  <td>Amount</td>
                </tr>
              </thead>
              <tbody className="*:border-b-[1px] *:border-gray-500">
                <tr>
                  <td className="">Sales</td>
                  <td>{SalesSummary?.sales?.sales}</td>
                  <td>
                    {SalesSummary?.sales?.sales_amount
                      ? SalesSummary?.sales?.sales_amount
                      : 0}
                  </td>
                </tr>
                <tr>
                  <td>Cancellation</td>

                  <td>{SalesSummary?.cancel?.cancel}</td>
                  <td>
                    {SalesSummary?.cancel?.cancel_amount
                      ? SalesSummary?.cancel?.cancel_amount
                      : 0}
                  </td>
                </tr>
                <tr>
                  <td>Tax</td>
                  <td>{SalesSummary?.tax?.tax}</td>
                  <td>
                    {SalesSummary?.tax?.tax_amount
                      ? SalesSummary?.tax?.tax_amount
                      : 0}
                  </td>
                </tr>
                <tr>
                  <td>Loyalty/Coupons</td>
                  <td>{SalesSummary?.discount?.discount}</td>
                  <td>
                    {SalesSummary?.discount?.discount_amount
                      ? SalesSummary?.discount?.discount_amount
                      : 0}
                  </td>
                </tr>
                <tr>
                  <td>Miscellaneous</td>
                  <td>{SalesSummary?.tip_amount?.tip}</td>
                  <td>
                    {SalesSummary?.tip_amount?.tip_amount
                      ? SalesSummary?.tip_amount?.tip_amount
                      : 0}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className=" custome-border scroll bg-lite-black  overflow-scroll text-xs">
          <header className="flex justify-between text-sm font-medium p-3">
            <p>Transaction</p>
            <div className="flex space-x-1 text-lite-green">
              <p>
                <span>0</span> Count
              </p>
              <p>
                <span>0</span> Total Sales
              </p>
            </div>
          </header>
          <table className="w-[570px] box-border  space-y-2  mx-4">
            <thead>
              <tr>
                <td>Transaction</td>
                <td>Count</td>
                <td>Amount</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="">Starting Cash</td>
                <td>
                  {transacation?.start?.start ? transacation.start.start : 0}
                </td>
                <td>
                  {transacation?.start?.starting_amount
                    ? transacation?.start.starting_amount
                    : 0}
                </td>
              </tr>
              <tr>
                <td>Cash Sales</td>
                <td>{transacation?.cash?.cash ? transacation.cash.cash : 0}</td>
                <td>
                  {transacation?.cash?.cash_payments
                    ? transacation.cash.cash_payments
                    : 0}
                </td>
              </tr>
              <tr>
                <td>Card Sales</td>
                <td>{transacation?.card?.card ? transacation.card.card : 0}</td>
                <td>
                  {transacation?.card?.card_payments
                    ? transacation?.card.card_payments
                    : 0}
                </td>
              </tr>
              <tr>
                <td>Payins</td>
                <td>
                  {transacation?.payin?.payin ? transacation.payin.payin : 0}
                </td>
                <td>
                  {transacation?.payin?.payin_amount
                    ? transacation?.payin.payin_amount
                    : 0}
                </td>
              </tr>
              <tr>
                <td>Payouts</td>
                <td>
                  {transacation?.payout?.payout
                    ? transacation.payout.payout
                    : 0}
                </td>
                <td>
                  {transacation?.payout?.payout_amount
                    ? transacation.payout.payout_amount
                    : 0}
                </td>
              </tr>
              <tr>
                <td>UPI</td>
                <td>{transacation?.upi?.upi ? transacation.upi.upi : 0}</td>
                <td>
                  {transacation?.upi?.upi_payments
                    ? transacation.upi.upi_payments
                    : 0}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <button className="flex items-center space-x-1 bg-blue-500 px-3 py-2 ms-4 rounded-[5px] text-white">
        <img src={printer} alt="" />
        <span>Print</span>
      </button>
    </main>
  );
};

export default Dailyreport;

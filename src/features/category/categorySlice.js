// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   category: [],
// };
// export const categorySlice = createSlice({
//   name: "category",
//   initialState,
//   reducers: {
//     AddCategory: (state, action) => {
//       state.category = action.payload.categoryName;
//     },
//   },
// });

// export const { AddCategory } = categorySlice.actions;
// export const CategoriesNames = (state) => state.category.category;
// export default categorySlice.reducer;



//---- calulator

{/* <div className="calculator">
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
                        prev ? handlepaise(prev, val) : Number(`.${val}`)
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
        //       </div>
        //     </div>
        //     <div>
        //       <h3>Pay Details</h3>
        //       <div className="pay-details">
        //         <div>
        //           <h4>Credited </h4>
        //           <span>{`${cash}`}</span>
        //         </div>
        //         <div>
        //           <h4>Balance</h4>
        //           <span>{Balance}</span>
        //         </div>
        //       </div>
        //       <div className="bill-btn">
        //         <button>Split Bill</button>
        //         <button>Print Bill</button>
        //       </div>
        //     </div>
        //   </div> */}
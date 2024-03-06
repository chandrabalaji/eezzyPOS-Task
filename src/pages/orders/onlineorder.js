export const onlineOrderPage = (Orders) => {
  return (
    <main className="orderOnlinePage flex flex-col h-screen bg-dark-black w-10/12">
      <div className="text-white mt-6 px-10 font-medium">
        <p>Online Order</p>
        {/* <p className="flex justify-center relative top-72">NO Online Order </p> */}
      </div>
      <section className="flex flex-col flex-grow-3 mt-2">
        <div className="flex justify-between items-center text-sm px-5 pe-20 text-white">
          <p>EZYODR26</p>
          <div>
            <p>Efficient</p>
            <p>9876543210</p>
          </div>
          <span>2 items</span>
          <p>27.00</p>
          <p>22-02-2024</p>
          <p className="bg-green-400  bg-opacity-70 rounded-2xl px-5 py-1 ">
            Delivered
          </p>
          <div>
            <img src="" alt="" />
            <p>View</p>
          </div>
        </div>
      </section>
      <div className=" flex  items-center  text-white  justify-between px-6 z-10  pb-10 ">
        <div className="flex items-center  ">
          <div className="flex  items-center  space-x-2 text-xs">
            <p>Page Size</p>
            <select
              name=""
              id=""
              className="bg-dark-black border px-2 py-1  rounded-sm"
            >
              <option value="">10</option>
              <option value="">20</option>
              <option value="">30</option>
              <option value="">40</option>
            </select>
            <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between"></div>
          </div>
          <div>
            <p class=" text-white space-x-1 text-xs">
              Showing
              <span class="font-medium px-1">1</span>
              to
              <span class="font-medium px-1">10</span>
              of
              <span class="font-medium px-1">97</span>
              results
            </p>
          </div>
        </div>
        <div>
          <nav
            class="isolate inline-flex -space-x-px rounded-md   justify-self-end  shadow-sm"
            aria-label="Pagination"
          >
            <a
              href="#"
              class="relative text-xs inline-flex items-center rounded-l-md px-3 py-1 text-gray-400 ring-1 ring-inset ring-gray-300 "
            >
              <span class="sr-only">Previous</span>
              <svg
                class="h-5 w-5 font-medium"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>

            <a
              href="#"
              class="relative inline-flex items-center rounded-r-md px-3 py-1 text-gray-400 ring-1 ring-inset ring-gray-300"
            >
              <span class="sr-only">Next</span>
              <svg
                class="h-5 w-5 font-medium"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </main>
  );
};

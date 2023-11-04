import React from 'react';

const DashboardNavbar = () => {
  return (
    <div className="px-10 mt-6">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/2 lg:w-1/2">
          <form>
            <div className="flex mt-16 md:mt-0 lg:mt-0">
              <div className="relative w-full mx-2 md:w-2/3 lg:w-2/3">
                <input
                  type="search"
                  className="block p-3 w-full z-20 text-sm text-gray-900 bg-[#F0F5FA] rounded-lg  "
                  placeholder="Search..."
                />
                <button
                  type="submit"
                  className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white rounded-r-lg "
                >
                  <svg
                    className="w-4 h-4 text-gray-800"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span className="sr-only">Search</span>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="flex flex-col md:flex-row justify-start items-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
            </div>
            <div className="ml-10">
              <img
                className="w-12 h-12 rounded-full"
                src="https://reqres.in/img/faces/7-image.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;

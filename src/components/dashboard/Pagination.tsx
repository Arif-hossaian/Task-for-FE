import { FC } from 'react';

const Pagination: FC<any> = ({ list, selectPageHandler, page }) => {
  let count = list.length / 3;
  console.log(count);
  const integerPart = Math.floor(count);
  const array = Array.from({ length: integerPart }, (_, index) => index + 1);
  console.log(array);
  return (
    <div className="mt-10 px-1">
      <nav aria-label="Page navigation example">
        <ul className="flex items-center -space-x-px h-10 text-base cursor-pointer">
          <li>
            <div
              onClick={() => selectPageHandler(page - 1)}
              className="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 "
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </div>
          </li>
          {array.map((_, i) => {
            return (
              <li
                key={i}
                onClick={() => selectPageHandler(i + 1)}
                className={
                  page === i + 1
                    ? 'flex items-center justify-center px-4 h-10 leading-tight  bg-blue-500 text-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 '
                    : 'flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 '
                }
              >
                <div className="">{i + 1}</div>
              </li>
            );
          })}

          <li onClick={() => selectPageHandler(page + 1)}>
            <div className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 ">
              <span className="sr-only">Next</span>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;

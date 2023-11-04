import { FC } from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  selectPageHandler: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({
  totalPages,
  currentPage,
  selectPageHandler,
}) => {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div className="mt-10 px-1">
      <nav aria-label="Page navigation example">
        <ul className="flex items-center -space-x-px h-10 text-base cursor-pointer">
          <li>
            <div
              onClick={() => selectPageHandler(currentPage - 1)}
              className={`flex items-center justify-center px-4 h-10 ml-0 leading-tight ${
                currentPage === 1
                  ? 'text-gray-500 bg-white border border-gray-300 rounded-l-lg'
                  : 'text-gray-700 bg-gray-100 border border-gray-300 hover:bg-gray-100 hover:text-gray-700'
              }`}
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </div>
          </li>
          {pageNumbers.map((pageNumber) => (
            <li
              key={pageNumber}
              onClick={() => selectPageHandler(pageNumber)}
              className={`flex items-center justify-center px-4 h-10 leading-tight ${
                currentPage === pageNumber
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'
              }`}
            >
              <div>{pageNumber}</div>
            </li>
          ))}
          <li>
            <div
              onClick={() => selectPageHandler(currentPage + 1)}
              className={`flex items-center justify-center px-4 h-10 leading-tight ${
                currentPage === totalPages
                  ? 'text-gray-500 bg-white border border-gray-300 rounded-r-lg'
                  : 'text-gray-700 bg-gray-100 border border-gray-300 hover:bg-gray-100 hover:text-gray-700'
              }`}
            >
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
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

import React, { FC } from 'react';

const UserListTable: FC<any> = ({ dataList, page }) => {
  return (
    <div className="relative overflow-x-auto  sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-500 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" className="p-4">
              #ID
            </th>
            <th scope="col" className="px-6 py-3">
              USER
            </th>
            <th scope="col" className="px-6 py-3">
              EMAIL
            </th>
            <th scope="col" className="px-6 py-3">
              OPTIONS
            </th>
          </tr>
        </thead>
        <tbody>
          {dataList.map((i: any, _id: number) => (
            <tr className="bg-white  hover:bg-gray-50" key={_id}>
              <td className="w-4 p-4">{i.id}</td>
              <th
                scope="row"
                className="flex items-center px-6 py-4  whitespace-nowrap "
              >
                <img className="w-16 h-16 rounded-lg" src={i.avatar} alt="" />
                <div className="pl-3">
                  <div className="text-gray-500 font-semibold">{`${i.first_name} ${i.last_name}`}</div>
                </div>
              </th>
              <td className="px-6 py-4 text-gray-600">{i.email}</td>

              <td className="px-6 py-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserListTable;

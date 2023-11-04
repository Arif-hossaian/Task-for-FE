import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { baseURL } from '../../api/baseUrl';
import UserListTable from '../../components/dashboard/userList/UserListTable';
import Pagination from '../../components/dashboard/Pagination';

const User = () => {
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(2);
  const fetchUsers = async (page: number) => {
    try {
      setLoading(true);
      await axios
        .get(`${baseURL}/users?page=${page}`)
        .then((res: any) => {
          console.log(res.data.data);
          setDataList(res.data.data);
          setTotalPages(res.data.total_pages);
          setLoading(false);
        })
        .catch((err: any) => {
          setDataList([]);
          setLoading(false);
          console.log(err);
        });
    } catch (error) {
      setDataList([]);
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers(currentPage);
  }, [currentPage]);

  const handlePageChange = (newPage: any) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  if (loading) return <p>Loading...</p>;
  return (
    <div className="px-10 mt-5">
      <h1 className="text-2xl font-semibold">User lists</h1>
      <div className="mt-10">
        <UserListTable dataList={dataList} />
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        selectPageHandler={handlePageChange}
      />
    </div>
  );
};

export default User;

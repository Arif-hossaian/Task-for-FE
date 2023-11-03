import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { baseURL } from '../../api/baseUrl';
import UserListTable from '../../components/dashboard/userList/UserListTable';
import Pagination from '../../components/dashboard/Pagination';

const User = () => {
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const fetchUsers = async () => {
    try {
      setLoading(true);
      await axios
        .get(`${baseURL}/users`)
        .then((res: any) => {
          console.log(res.data.data);
          setDataList(res.data.data);
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
    fetchUsers();
  }, []);

  const selectPageHandler = (selectedPage: number) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= dataList.length / 3 &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  if (loading) return <p>Loading...</p>;
  return (
    <div className="px-10 mt-5">
      <h1 className="text-2xl font-semibold">User lists</h1>
      <div className="mt-10">
        <UserListTable dataList={dataList} page={page} />
      </div>
      <Pagination
        list={dataList}
        page={page}
        selectPageHandler={selectPageHandler}
      />
    </div>
  );
};

export default User;

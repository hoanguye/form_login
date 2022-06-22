import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAll, getDetail, filterData } from '../handleData';
import { setData, setDetail } from '../redux/payrollReducer';

import PayrollTable from '../components/PayrollTable';
import Filter from '../components/Filter';
import ViewDetail from '../components/ViewDetail';
import './PayrollPage.scss';
import Pagination from '../components/Pagination';
interface Props {}

const Payroll = () => {
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filter, setFilter] = useState({ status: '' });
  const dispatch = useDispatch();

  useEffect(() => {
    const response = getAll(currentPage, filter);
    dispatch(setData(response.data, response.total));
  }, [dispatch, currentPage, filter]);

  const onGetDetail = (id: string) => {
    const response = getDetail(id);
    dispatch(setDetail(response));
  };

  const handleShowDetail = () => {
    setShowDetail(!showDetail);
  };

  const handleFilter = (status: string) => {
    setFilter({ status: status });
    setCurrentPage(1);
    const response = getAll(currentPage, filter);
    dispatch(setData(response.data, response.total));
  };

  const handleClear = () => {
    setFilter({ status: '' });
  };

  return (
    <div className="payroll_wrapper">
      <h3>payroll transaction list</h3>
      <Filter handleFilter={handleFilter} handleClear={handleClear} />
      <PayrollTable onGetDetail={onGetDetail} handleShowDetail={handleShowDetail} />
      {showDetail && <ViewDetail handleShowDetail={handleShowDetail} />}
      <div className="payroll_pagination">
        <Pagination currentPage={currentPage} selectPage={(page: number) => setCurrentPage(page)} />
      </div>
    </div>
  );
};
export default Payroll;

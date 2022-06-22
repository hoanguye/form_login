import React, { useState } from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import './Pagination.scss';
interface Props {
  currentPage: number;
  selectPage: (page: number) => void;
}

const Pagination = (props: Props) => {
  const total = useSelector((state: RootStateOrAny) => state.payroll.total);
  const totalPage = Math.ceil(total / 10);
  const array = [];
  for (let i = 0; i < totalPage; i++) {
    array.push(i + 1);
  }
  const handleSelectPage = (page: number) => {
    props.selectPage(page);
  };
  return (
    <div className="pagination">
      {array.map((e) => (
        <span onClick={() => handleSelectPage(e)} key={e} className={`${props.currentPage === e && 'active'} `}>
          {' '}
          {e}
        </span>
      ))}
    </div>
  );
};

export default Pagination;

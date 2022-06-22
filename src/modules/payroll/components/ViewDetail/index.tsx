import React from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import { FaTimes } from 'react-icons/fa';
import './ViewDetail.scss';
interface Props {
  handleShowDetail: () => void;
}

const ViewDetail = (props: Props) => {
  const detail = useSelector((state: RootStateOrAny) => state.payroll.detail);
  return (
    <div className="detail_wrapper">
      <span className="icon_exits" onClick={() => props.handleShowDetail()}>
        <FaTimes />
          </span>
          <div>
              
          </div>
    </div>
  );
};

export default ViewDetail;

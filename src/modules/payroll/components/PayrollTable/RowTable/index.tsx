import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';

import { formatDate } from 'utils/index';
import Button from '../../Button';
import './RowTable.scss';
interface Props {
  data: any;
  onGetDetail: (id: string) => void;
  handleShowDetail: () => void;
}

const RowTable = ({ data, onGetDetail, handleShowDetail }: Props) => {
  const renderColor = () => {
    switch (data.async_status) {
      case 'finished':
        return '#61ca9f';
      case 'pending':
        return '#9db0be';
      default:
        return 'red';
    }
  };
  return (
    <>
      <tr style={{ padding: '20px 22px', textTransform: 'capitalize' }}>
        <td style={{ color: renderColor(), fontWeight: 'bold' }}>{data.async_status}</td>
        <td>{formatDate(data.date_confirmed)}</td>
        <td>{data.currency}</td>
        <td>{data.volume_input_in_input_currency}</td>
        <td className="invoice">{data.subpayroll_ids[0]}</td>
        <td>
          <div>
            <span
              onClick={() => {
                onGetDetail(data.payroll_id);
                handleShowDetail();
              }}
            >
              <Button primary rounded>
                View Detail
              </Button>
            </span>
            <span className="icon">
              <AiOutlineDelete />
            </span>
          </div>
        </td>
      </tr>
    </>
  );
};

export default RowTable;

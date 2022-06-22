import React from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import TitleTable from './TitleTable';
import RowTable from './RowTable';



import { TITLE_TABLE } from 'utils/constants';
import './PayrollTable.scss';
interface Props {
  onGetDetail: (id: string) => void;
  handleShowDetail: () => void;
}

const PayrollTable = (props: Props) => {
  const payroll = useSelector((state: RootStateOrAny) => state.payroll.payrolls);




  
  return (
    <div>
      <table className="table_wrapper">
        <thead>
          <TitleTable title={TITLE_TABLE} />
        </thead>
        <tbody>
          {payroll?.map((row: any, index: number) => (
            <RowTable
              key={index}
              data={row}
              onGetDetail={props.onGetDetail}
              handleShowDetail={props.handleShowDetail}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PayrollTable;

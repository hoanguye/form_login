import React from 'react';
import './SelectDate.scss';
interface Props {
}

const SelectDate = (props: Props) => {
  return (
    <input type="date" className="input_date"/>
  );
};

export default SelectDate;

import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import Button from '../Button';
import InputSelect from '../InputSelect';
import { STATUS_ } from 'utils/constants';

import './Filter.scss';
import SelectDate from '../SelectDate';
interface Props {
  handleFilter: (status: string) => void;
  handleClear: () => void;
}

const Filter = (props: Props) => {
  const [value, setValue] = useState<string>('');
  return (
    <div className="filter_wrapper">
      <div className="filter_button">
        <InputSelect
          updateValue={(value: string) => setValue(value)}
          label="status"
          data={STATUS_}
          Icon={FiChevronDown}
        />

        <SelectDate />
      </div>

      <div style={{ display: 'flex', gap: '15px' }}>
        <span onClick={() => props.handleFilter(value)}>
          <Button primary>Apply</Button>
        </span>
        <span onClick={() => props.handleClear()}>
          <Button>Clear</Button>
        </span>
      </div>
    </div>
  );
};

export default Filter;

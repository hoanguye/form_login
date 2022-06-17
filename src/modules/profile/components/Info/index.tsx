import React, { useState } from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import { InfoState } from '../../redux/profileReducer';
import InfoItem from '../InfoItem';
import './Info.css';

import Loading from '../Loading'
interface Props {
  isLoading: boolean;
  // onConfirm: (id: number, value: string) => void;
}

const Info = ({ isLoading }: Props) => {
  const info = useSelector((state: RootStateOrAny) => state.info);
  const [data, setData] = useState(info);
  return (
    <div className="info_wrapper">
      <div className="btn">
        <button>Confirm</button>
        <button>Reset</button>
      </div>
      {info &&
        info.map((item: InfoState, index: number) => <InfoItem data={item} key={index} blur={index % 2 === 0} />)}
      {isLoading && <Loading />}
      {/* <Loading /> */}
    </div>
  );
};

export default Info;

import React from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import { InfoState } from '../../redux/profileReducer';
import InfoItem from '../InfoItem';
import './Info.css';
interface Props {
  isLoading: boolean;
}

const Info = ({ isLoading }: Props) => {
  const info = useSelector((state: RootStateOrAny) => state.info);
  return (
    <div className="info_wrapper">
      <div className="btn">
        <button>Confirm</button>
        <button>Reset</button>
      </div>
      {info && info.map((item: InfoState, index: number) => <InfoItem data={item} key={index} />)}
      {isLoading && <div className="loading" role="status">Loading...</div>}
    </div>
  );
};

export default Info;

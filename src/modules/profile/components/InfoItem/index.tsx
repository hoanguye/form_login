import React, { useState, memo } from 'react';
import { InfoState } from '../../redux/profileReducer';
import './InfoItem.css';
interface Props {
  data: InfoState;
  blur?: boolean;
}

const InfoItem = ({ data, blur }: Props) => {
  const [title, setTitle] = useState<string>(data.title);
  return (
    <div className={`info_item ${blur && 'blur'}`}>
      <img src={data.thumbnailUrl} alt="" />
      <div>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <span>{Date.now()}</span>
      </div>
    </div>
  );
};

export default memo(InfoItem);

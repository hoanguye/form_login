import React, { useState, memo, useRef } from 'react';
import { InfoState } from '../../redux/profileReducer';
import './InfoItem.css';
interface Props {
  data: InfoState;
}

const InfoItem = ({ data }: Props) => {
  const [isInput, setIsInput] = useState<boolean>(false);
  const [title, setTitle] = useState<string>(data.title);
  return (
    <div className="info_item">
      <img src={data.thumbnailUrl} alt="" />
      <div>
        {isInput ? (
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
        ) : (
          <span
            onClick={() => {
              setIsInput(!isInput);
            }}
          >
            {data.title}
          </span>
        )}
        <span>{Date.now()}</span>
      </div>
    </div>
  );
};

export default memo(InfoItem);

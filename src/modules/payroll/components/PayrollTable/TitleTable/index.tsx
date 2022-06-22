import React from 'react';

import './TitleTable.scss';

interface Props {
  title: string[];
}

const TitleTable = ({ title }: Props) => {
  return (
    <tr className="title">
      {title?.map((e, index) => (
        <th key={index}>{e}</th>
      ))}
      <th></th>
    </tr>
  );
};

export default TitleTable;

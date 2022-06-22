import React from 'react';
import './Button.scss';
interface Props {
  children: React.ReactNode;
  primary?: boolean;
  rounded?: boolean;
  // onClick?: (event: MouseEvent) => void;
}

const Button = ({ children, primary, rounded }: Props) => {
  return <button className={`${primary ? '' : 'delete'} button ${rounded && 'rounded'}`}>{children}</button>;
};

export default Button;

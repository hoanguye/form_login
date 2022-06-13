import React from 'react';
import logo from '../../../logo-420-x-108.png';
import './Layout.scss';
interface Props {
  children: React.ReactNode;
}

const Layout = (props: Props) => {
  return (
    <div className="wrapper">
      <img className="logo" src={logo} alt="logo" />
      {props.children}
    </div>
  );
};

export default Layout;

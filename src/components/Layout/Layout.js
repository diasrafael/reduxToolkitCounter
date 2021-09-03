import { Fragment } from 'react';
import MainHeader from './MainHeader';

const Layout = (props) => {
  return (
    <Fragment>
      <MainHeader onMyCartClick={props.onMyCartClick} />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;

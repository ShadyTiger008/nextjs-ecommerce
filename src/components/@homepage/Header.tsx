import React from 'react'
import HeaderTop from '../shared/header-top';
import HeaderMid from '../shared/header-mid';
import HeaderBottom from '../shared/header-bottom';

type Props = {}

const Header = (props: Props) => {
  return (
    <div>
      <HeaderTop />
      <HeaderMid/>
      <HeaderBottom/>
    </div>
  );
}

export default Header
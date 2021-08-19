import React from 'react';
import { Link, Route } from 'react-router-dom';
const menus = [
  { name: 'Trang Chu', to: '/', exact: true },
  { name: 'Quan Ly San Pham', to: '/product-list', exact: false },
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <>
      <Route
        path={to}
        exact={activeOnlyWhenExact}
        children={({ match }) => {
          var active = match ? 'active' : '';
          return (
            <li className={active}>
              <Link to={to}>{label}</Link>
            </li>
          );
        }}
      />
    </>
  );
};
const showMenu = (menus) => {
  var result = null;
  if (menus.length > 0) {
    result = menus.map((menu, index) => (
      <MenuLink
        to={menu.to}
        label={menu.name}
        activeOnlyWhenExact={menu.exact}
        key={index}
      />
    ));
  }
  return result;
};
export default function Menu() {
  return (
    <>
      <div className='navbar navbar-default'>
        <a href='/' className='navbar-brand'>
          Call API
        </a>
        <ul className='nav navbar-nav'>{showMenu(menus)}</ul>
      </div>
    </>
  );
}

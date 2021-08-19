import { Route, Link } from 'react-router-dom';

const menus = [
  {
    name: 'Trang Chu',
    to: '/',
    exact: true,
  },
  {
    name: 'Gioi Thieu',
    to: '/about',
    exact: false,
  },
  {
    name: 'Lien He',
    to: '/concat',
    exact: false,
  },
];
function Menu() {
  const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
      <Route
        path={to}
        exact={activeOnlyWhenExact}
        children={({ match }) => {
          let active = match ? 'active abc' : '';
          return (
            <li className={`my-li ${active}`}>
              <Link to={to} className='my-link'>
                {label}
              </Link>
            </li>
          );
        }}
      />
    );
  };

  return (
    <nav className='navbar navbar-default'>
      <ul className='nav navbar-nav'>
        {menus.map((menu, index) => (
          <MenuLink
            label={menu.name}
            to={menu.to}
            activeOnlyWhenExact={menu.exact}
            key={index}
          />
        ))}
      </ul>
    </nav>
  );
}

export default Menu;

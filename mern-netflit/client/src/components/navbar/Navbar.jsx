import { ArrowDropDown, Notifications, Search } from '@material-ui/icons';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../authContext/AuthActions';
import { AuthContext } from '../../authContext/AuthContext';
import './navbar.scss';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { dispatch } = useContext(AuthContext);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
      <div className='container'>
        <div className='left'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png'
            alt=''
          />
          <Link to='/' className='link'>
            <span>Homepage</span>
          </Link>
          <Link to='/series' className='link'>
            <span className='="navbarmainLinks'>Series</span>
          </Link>
          <Link to='/movies' className='link'>
            <span className='="navbarmainLinks'>Movies</span>
          </Link>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className='right'>
          <Search className='icon' />
          <span>KID</span>
          <Notifications className='icon' />
          <img
            src='https://scontent.fhan5-7.fna.fbcdn.net/v/t1.6435-9/55564215_382038442632822_4774612609208942592_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=174925&_nc_ohc=rnCFMnCsJYQAX---am3&_nc_ht=scontent.fhan5-7.fna&oh=93eecb56f52bffb141fea2cd4addefac&oe=6193753D'
            alt=''
          />
          <div className='profile'>
            <ArrowDropDown className='icon' />
            <div className='options'>
              <span>Settings</span>
              <span onClick={() => dispatch(logout())}>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

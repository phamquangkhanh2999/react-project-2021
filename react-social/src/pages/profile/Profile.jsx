import './profile.css';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';

export default function Profile() {
  return (
    <div>
      <>
        <Topbar />
        <div className='profile'>
          <Sidebar />
          <div className='profileRight'>
            <div className='profileRightTop'>
              <div className='profileCover'>
                <img
                  src='assets/post/3.jpeg'
                  alt=''
                  className='profileCoveImg'
                />
                <img
                  src='assets/person/1.jpeg'
                  alt=''
                  className='profileUserImg'
                />
              </div>
              <div className='profileInfo'>
                <h4 className='profileInfoName'>Quang Khanh</h4>
                <span className='profileInfoDesc'>Hello my friends! </span>
              </div>
            </div>
            <div className='profileRightBottom'>
              <Feed />
              <Rightbar profile />
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

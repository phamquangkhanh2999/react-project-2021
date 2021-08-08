import './rightbar.css';
import { Users } from '../../dummyData.js';
import Online from '../online/Online';
export default function Rightbar({ profile }) {
  const HomeRingBar = () => {
    return (
      <>
        <div className='birthdayContainer'>
          <img src='assets/gift.png' alt='' className='birthdayImg' />
          <span className='birthdayText'>
            <b>Pola Foster</b> and <b> 3 other friends </b> have a birhtday
            today
          </span>
        </div>
        <img className='rightbarAd' src='assets/ad.png' alt='' />
        <h4 className='rightbarTitile'>Online Friends </h4>
        <ul className='rightbarFrinedList'>
          {Users.map((user) => (
            <Online key={user.id} user={user} />
          ))}
        </ul>
      </>
    );
  };
  const ProfileRightbar = () => {
    return (
      <>
        <h4 className='rightbarTitle'>User information</h4>
        <div className='rightbarInfo'>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>City: </span>
            <span className='rightbarInfoValue'>Thai Binh </span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>From: </span>
            <span className='rightbarInfoValue'>Viet Nam</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>Relationship: </span>
            <span className='rightbarInfoValue'>Single </span>
          </div>
        </div>

        <h4 className='rightbarTitle'>User friends </h4>
        <div className='rightbarFollowings'>
          <div className='rightbarFollowing'>
            <img
              src='assets/person/3.jpeg'
              alt=''
              className='rightbarFollowingImg'
            />
            <span className='rightbarFollowingName'>John carter </span>
          </div>
          <div className='rightbarFollowing'>
            <img
              src='assets/person/10.jpeg'
              alt=''
              className='rightbarFollowingImg'
            />
            <span className='rightbarFollowingName'>John carter </span>
          </div>
          <div className='rightbarFollowing'>
            <img
              src='assets/person/2.jpeg'
              alt=''
              className='rightbarFollowingImg'
            />
            <span className='rightbarFollowingName'>John carter </span>
          </div>
          <div className='rightbarFollowing'>
            <img
              src='assets/person/5.jpeg'
              alt=''
              className='rightbarFollowingImg'
            />
            <span className='rightbarFollowingName'>John carter </span>
          </div>
          <div className='rightbarFollowing'>
            <img
              src='assets/person/7.jpeg'
              alt=''
              className='rightbarFollowingImg'
            />
            <span className='rightbarFollowingName'>John carter </span>
          </div>
          <div className='rightbarFollowing'>
            <img
              src='assets/person/9.jpeg'
              alt=''
              className='rightbarFollowingImg'
            />
            <span className='rightbarFollowingName'>John carter </span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        {profile ? <ProfileRightbar /> : <HomeRingBar />}
      </div>
    </div>
  );
}

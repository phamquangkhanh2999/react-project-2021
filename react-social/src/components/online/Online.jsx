import './online.css';

export default function Online({ user }) {
  const { profilePicture, username } = user;
  return (
    <div>
      <li className='rightBarFiend'>
        <div className='rightbarProfileImgContainer'>
          <img src={profilePicture} alt='' className='rightbarProfileImg' />
          <span className='rightbarOnline'></span>
        </div>
        <span className='rightbarUserName'>{username}</span>
      </li>
    </div>
  );
}

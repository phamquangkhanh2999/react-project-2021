import './online.css';

export default function Online({ user }) {
  const { profilePicture, username } = user;
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div>
      <li className='rightBarFiend'>
        <div className='rightbarProfileImgContainer'>
          <img
            src={PF + profilePicture}
            alt=''
            className='rightbarProfileImg'
          />
          <span className='rightbarOnline'></span>
        </div>
        <span className='rightbarUserName'>{username}</span>
      </li>
    </div>
  );
}

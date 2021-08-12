import './closeFriend.css';

export default function CloseFriend({ user }) {
  const { profilePicture, username } = user;
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div>
      <li className='sidebarFriend'>
        <img src={PF + profilePicture} alt='' className='sidebarFriendImg' />
        <span className='sidebarFriendName'>{username}</span>
      </li>
    </div>
  );
}

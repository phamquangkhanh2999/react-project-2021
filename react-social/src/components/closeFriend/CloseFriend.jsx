import './closeFriend.css';

export default function CloseFriend({ user }) {
  const { profilePicture, username } = user;
  return (
    <div>
      <li className='sidebarFriend'>
        <img src={profilePicture} alt='' className='sidebarFriendImg' />
        <span className='sidebarFriendName'>{username}</span>
      </li>
    </div>
  );
}

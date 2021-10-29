import './chatOnline.css';

export default function ChatOnline() {
  return (
    <div className='chatOnline'>
      <div className='chatOnlineFriend'>
        <div className='chatOnlineImgContainer'>
          <img
            className='chatOnlineImg'
            src='https://scontent.fhan5-3.fna.fbcdn.net/v/t1.6435-9/151633889_874864800016848_4717715071500948396_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=w6Aa5ptG8-cAX92HY0D&_nc_ht=scontent.fhan5-3.fna&oh=d767049f0a466fb336c85dbd1aa2ad1f&oe=6153B671'
            alt=''
          />
          <div className='chatOnlineBadge'></div>
        </div>
        <span className='chatonlineName'>John Doe</span>
      </div>
      <div className='chatOnlineFriend'>
        <div className='chatOnlineImgContainer'>
          <img
            className='chatOnlineImg'
            src='https://scontent.fhan5-3.fna.fbcdn.net/v/t1.6435-9/151633889_874864800016848_4717715071500948396_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=w6Aa5ptG8-cAX92HY0D&_nc_ht=scontent.fhan5-3.fna&oh=d767049f0a466fb336c85dbd1aa2ad1f&oe=6153B671'
            alt=''
          />
          <div className='chatOnlineBadge'></div>
        </div>
        <span className='chatonlineName'>John Doe</span>
      </div>
    </div>
  );
}

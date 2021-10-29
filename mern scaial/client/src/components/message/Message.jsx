import './message.css';

export default function Message({ own }) {
  return (
    <div className={own ? 'message own' : 'message'}>
      <div className='messageTop'>
        <img
          src='https://scontent.fhan5-3.fna.fbcdn.net/v/t1.6435-9/151633889_874864800016848_4717715071500948396_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=w6Aa5ptG8-cAX92HY0D&_nc_ht=scontent.fhan5-3.fna&oh=d767049f0a466fb336c85dbd1aa2ad1f&oe=6153B671'
          alt=''
          className='messageImg'
        />
        <p className='messageText'>Hello this is message </p>
      </div>
      <div className='messageBottom'>1 hour age</div>
    </div>
  );
}

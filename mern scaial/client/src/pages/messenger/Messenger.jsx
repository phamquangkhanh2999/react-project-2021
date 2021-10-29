import ChatOnline from '../../components/chatOnline/ChatOnline';
import Conversations from '../../components/conversations/Conversations';
import Message from '../../components/message/Message';
import Topbar from '../../components/topbar/Topbar';
import './messenger.css';
export default function Messenger() {
  return (
    <>
      <Topbar />
      <div className='messenger'>
        <div className='chatMenu'>
          <div className='chatMenuWrapper'>
            <input placeholder='Search for friends' className='chatMenuInput' />
            <Conversations />
            <Conversations />
            <Conversations />
            <Conversations />
            <Conversations />
            <Conversations />
            <Conversations />
            <Conversations />
          </div>
        </div>
        <div className='chatBox'>
          <div className='chatBoxWrapper'>
            <div className='chatBoxTop'>
              <Message />
              <Message own={true} />
              <Message />
              <Message own={true} />
              <Message />
              <Message own={true} />
              <Message />
              <Message own={true} />
              <Message />
              <Message own={true} />
              <Message />
              <Message own={true} />
              <Message />
              <Message own={true} />
              <Message />
              <Message own={true} />
              <Message />
              <Message own={true} />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
              <Message />
            </div>
            <div className='chatBoxBottom'>
              <textarea
                placeholder='write something...'
                className='chatMessageInput'
              ></textarea>
              <button className='chatSubmitButton'>Send</button>
            </div>
          </div>
        </div>
        <div className='chatOnline'>
          <div className='chatOnlineWrapper'>
            <ChatOnline />
          </div>
        </div>
      </div>
      ;
    </>
  );
}

import { useRef } from 'react';

export default function Start({ setUesrName }) {
  const inputRef = useRef();
  const handleClick = () => {
    inputRef.current.value && setUesrName(inputRef.current.value);
  };
  return (
    <div className='start'>
      <input
        placeholder='enter yout name'
        className='startInput'
        ref={inputRef}
      />
      <button className='startBtn' onClick={handleClick}>
        Start
      </button>
    </div>
  );
}

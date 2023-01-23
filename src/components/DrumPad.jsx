import { useRef } from 'react';
const DrumPad = ({ pad, index }) => {
  const audioFile = useRef(null);
  return (
    <button
      className="drum-pad"
      id={index}
      onClick={() => audioFile.current.play()}
    >
      <audio
        className="clip"
        id={pad}
        src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
        ref={audioFile}
      ></audio>
      {pad}
    </button>
  );
};
export default DrumPad;

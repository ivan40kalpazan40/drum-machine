import { useRef } from 'react';
const DrumPad = ({ pad, link, index }) => {
  const audioFile = useRef(null);

  return (
    <button
      className="drum-pad"
      id={index}
      onClick={() => audioFile.current.play()}
    >
      <audio className="clip" id={pad} src={link} ref={audioFile}></audio>
      {pad}
    </button>
  );
};
export default DrumPad;

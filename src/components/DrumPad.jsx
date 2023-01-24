import { useRef } from 'react';
import { audioLinks } from '../utils/utils';
const DrumPad = ({ pad, index }) => {
  const audioFile = useRef(null);
  const src = audioLinks[pad.toLowerCase()];
  return (
    <button
      className="drum-pad"
      id={index}
      onClick={() => audioFile.current.play()}
    >
      <audio className="clip" id={pad} src={src} ref={audioFile}></audio>
      {pad}
    </button>
  );
};
export default DrumPad;

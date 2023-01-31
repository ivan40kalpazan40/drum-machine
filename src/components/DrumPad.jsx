import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setName } from '../slices/padSlice';
const DrumPad = ({ pad, link, index }) => {
  const dispatch = useDispatch();
  const audioFile = useRef(null);
  return (
    <button
      className="drum-pad"
      id={index}
      onClick={() => {
        audioFile.current.play();
        dispatch(setName(pad.charCodeAt(0)));
      }}
    >
      <audio className="clip" id={pad} src={link} ref={audioFile}></audio>
      {pad}
    </button>
  );
};
export default DrumPad;

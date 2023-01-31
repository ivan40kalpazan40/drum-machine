import { useSelector } from 'react-redux';

import DrumPad from './DrumPad';

const KeyPad = () => {
  const drumPads = useSelector((state) => state.pads.pads);
  return (
    <div id="keyPad">
      {drumPads.map((pad, i) => (
        <DrumPad
          key={i}
          link={pad.link}
          pad={pad.pad.toUpperCase()}
          index={i}
        />
      ))}
    </div>
  );
};
export default KeyPad;

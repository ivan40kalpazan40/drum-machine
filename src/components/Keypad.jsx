import { drumPads } from '../utils/utils';
import DrumPad from './DrumPad';

const KeyPad = () => {
  return (
    <div id="keyPad">
      {drumPads.map((pad, i) => (
        <DrumPad key={i} pad={pad.toUpperCase()} index={i} />
      ))}
    </div>
  );
};
export default KeyPad;

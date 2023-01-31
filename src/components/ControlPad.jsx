import { useSelector } from 'react-redux';

const ControlPad = () => {
  const name = useSelector((state) => state.pads?.currentName);
  return <div id="display">{name || ''}</div>;
};
export default ControlPad;

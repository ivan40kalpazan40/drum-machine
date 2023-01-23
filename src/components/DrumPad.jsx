const DrumPad = ({ pad, index }) => {
  return (
    <button className="drum-pad" id={index}>
      {pad}
    </button>
  );
};
export default DrumPad;

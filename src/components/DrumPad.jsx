const DrumPad = ({ pad, index }) => {
  return (
    <button className="drum-pad" id={index}>
      <audio
        className="clip"
        id={pad}
        src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
      ></audio>
      {pad}
    </button>
  );
};
export default DrumPad;

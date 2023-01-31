import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import KeyPad from './components/Keypad';
import ControlPad from './components/ControlPad';
import { setName } from './slices/padSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const handleKeyDown = (e) => {
      const btn = document.getElementById(e.key.toUpperCase());
      btn && btn.play();
      dispatch(setName(e.keyCode));
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
  return (
    <div id="drum-machine">
      <KeyPad />
      <ControlPad />
    </div>
  );
}

export default App;

// TODO: on-of switch in control pad
// TODO: volume slider in control pad
// TODO: pad switcher in control pad

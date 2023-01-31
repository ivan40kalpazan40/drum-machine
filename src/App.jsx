import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import KeyPad from './components/Keypad';
import ControlPad from './components/ControlPad';
import { pressKey, clearKeyState } from './slices/padSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const handleKeyDown = (e) => {
      console.log(e.keyCode);
      dispatch(pressKey(e.keyCode));
      setTimeout(() => {
        dispatch(clearKeyState(e.keyCode));
      }, 3000);
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

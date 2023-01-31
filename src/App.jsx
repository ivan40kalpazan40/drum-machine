import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import KeyPad from './components/Keypad';
import ControlPad from './components/ControlPad';

function App() {
  useEffect(() => {
    const handleKeyDown = (e) => {
      console.log(e.keyCode);
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

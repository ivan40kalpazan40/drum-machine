import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import KeyPad from './components/Keypad';
import ControlPad from './components/ControlPad';

function App() {
  return (
    <div id="drum-machine">
      <KeyPad />
      <ControlPad />
    </div>
  );
}

export default App;

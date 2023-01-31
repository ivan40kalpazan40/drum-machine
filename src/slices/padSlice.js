import { createSlice } from '@reduxjs/toolkit';

const padSlice = createSlice({
  name: 'pads',
  initialState: {
    q: {
      link: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
      state: '',
      code: 81,
    },
    w: {
      link: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
      state: '',
      code: 87,
    },
    e: {
      link: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
      state: '',
      code: 69,
    },
    a: {
      link: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
      state: '',
      code: 65,
    },
    s: {
      link: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
      state: '',
      code: 83,
    },
    d: {
      link: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
      state: '',
      code: 68,
    },
    z: {
      link: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
      status: '',
      code: 90,
    },
    x: {
      link: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
      status: '',
      code: 88,
    },
    c: {
      link: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
      state: '',
      code: 67,
    },
  },
  reducers: {},
});

export default padSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const padSlice = createSlice({
  name: 'pads',
  initialState: {
    pads: [
      {
        pad: 'q',
        link: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
        status: '',
        name: 'Heater 1',
        code: 81,
      },
      {
        pad: 'w',
        link: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
        status: '',
        name: 'Heater 2',
        code: 87,
      },
      {
        pad: 'e',
        link: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
        status: '',
        name: 'Heater 3',
        code: 69,
      },
      {
        pad: 'a',
        link: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
        status: '',
        name: 'Heater 4',
        code: 65,
      },
      {
        pad: 's',
        link: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
        status: '',
        name: 'Clap',
        code: 83,
      },
      {
        pad: 'd',
        link: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
        status: '',
        name: 'Open HH',
        code: 68,
      },
      {
        pad: 'z',
        link: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
        status: '',
        name: "Kick n' Hat",
        code: 90,
      },
      {
        pad: 'x',
        link: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
        status: '',
        name: 'Kick',
        code: 88,
      },
      {
        pad: 'c',
        link: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
        status: '',
        name: 'Closed HH',
        code: 67,
      },
    ],
    currentName: '',
  },
  reducers: {
    setName: (state, action) => {
      const code = action.payload;
      const found = state.pads.find((pad) => pad.code === code);
      if (found) {
        state.currentName = found.name;
      } else {
        state.currentName = '';
      }
    },
  },
});
export const { setName } = padSlice.actions;
export default padSlice.reducer;

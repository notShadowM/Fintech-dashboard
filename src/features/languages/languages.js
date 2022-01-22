import { createSlice } from '@reduxjs/toolkit';

export const LanguagesSlice = createSlice({
  name: 'bigChart',
  initialState: {
    selected: 'en',
    en: {
      lang: 'English',
      greetings: 'Hey',
      earningPart1: 'You earned NGN',
      earningPart2: 'this month.',

    },
    fr: {
      lang: 'French',
      greetings: 'Hé',
      earningPart1: 'Tu as gagné NGN',
      earningPart2: 'ce mois-ci.',
    },

  },
  reducers: {
    changeLang: (state, action) => {
      state.selected = state.selected === 'en' ? 'fr' : 'en';
    },
  },
});

export const { changeLang } = LanguagesSlice.actions;

export default LanguagesSlice.reducer;

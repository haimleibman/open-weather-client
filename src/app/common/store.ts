import { atom } from 'recoil';

export const SelectedCity = atom<string>({
  key: 'selectedCity',
  default: 'Tel Aviv'
});

export const FavoriteCities = atom<string[]>({
  key: 'favorites',
  default: []
});
import {atom} from 'recoil';

export type AtomType = {
  [key: string]: string | number | [] | object | boolean | null;
};

export const BookingAtom = atom<AtomType>({
  key: 'BookingAtom',
  default: {},
});

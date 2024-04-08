import { AtomEffect, atom, useSetRecoilState } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const ssrCompletedState = atom({
  key: 'SsrCompleted',
  default: false,
});

export const useSsrComplectedState = () => {
  const setSsrCompleted = useSetRecoilState(ssrCompletedState);
  return () => setSsrCompleted(true);
};
const { persistAtom } = recoilPersist();

export const persistAtomEffect = <T>(param: Parameters<AtomEffect<T>>[0]) => {
  param.getPromise(ssrCompletedState).then(() => persistAtom(param));
};

// export const isLoggedIn = atom<boolean | null>({
//   key: 'isLoggedIn',
//   default: null,
//   effects_UNSTABLE: [persistAtomEffect],
// });

export const accesstoken = atom<string | null | undefined>({
  key: 'accesstoken',
  default: null,
  effects_UNSTABLE: [persistAtomEffect],
});

export const username = atom<string | null | undefined>({
  key: 'username',
  default: null,
  effects_UNSTABLE: [persistAtomEffect],
});

export const nickname = atom<string>({
  key: 'nickname',
  default: '',
  effects_UNSTABLE: [persistAtomEffect],
});

export const name = atom<string | null | undefined>({
  key: 'name',
  default: null,
  effects_UNSTABLE: [persistAtomEffect],
});

export const profileImageUrl = atom<string | null | undefined>({
  key: 'profileImageUrl',
  default: null,
  effects_UNSTABLE: [persistAtomEffect],
});

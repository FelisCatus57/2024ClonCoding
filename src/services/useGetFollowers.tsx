import { useQuery } from 'react-query';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { accesstoken } from '../commons/globalstate/globalstate';
import { getCookie } from './useReactCookie';
import { useState } from 'react';

const getFollowers = async (nickname: string, accessToken: string | null | undefined) => {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API}/api/${nickname}/followers`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data;
};

export function useGetFollowers(nickname: string) {
  const accessToken = getCookie('accessToken');
  return useQuery(['getFollowers', nickname], () => getFollowers(nickname, accessToken), {
    enabled: !!nickname,
  });
}

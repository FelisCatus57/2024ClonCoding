import { useRouter } from 'next/router';

export const useRouterBack = () => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };
  return goBack;
};

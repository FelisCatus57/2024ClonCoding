import axios from 'axios';

interface userInfo {
  username: string;
  password: string;
  name: string;
  nickname: string;
  email: string;
}
export default function useSignup(userInfo: userInfo) {
  const signup = () => {
    axios
      .post(`${process.env.NEXT_PUBLIC_API}signup`, userInfo)
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
        }
      })
      .catch((error) => alert(error.response.data.message));
  };

  return signup;
}

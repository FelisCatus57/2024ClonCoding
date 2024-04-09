// import { useState } from 'react';
// import axios from 'axios';
// import { getCookie } from './useReactCookie';

// export const usePostBoard = () => {
//   const [isLoading, setIsLoading] = useState(false);

//   const accessToken = getCookie('accessToken');
//   const postBoard = async (content: string, Image: File) => {
//     if (!Image) {
//       alert('이미지를 첨부해주세요');
//       return;
//     }

//     setIsLoading(true);
//     const formData = new FormData();
//     formData.append('files', Image);
//     formData.append('content', content); //추가
//     try {
//       const response = await axios.post(
//         `${process.env.NEXT_PUBLIC_API}/api/post`,
//         // '/api/post',
//         // {
//         //   content: content,
//         //   files: formData,
//         // },
//         formData, //추가
//         {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//             'Content-Type': 'multipart/form-data',
//           },
//         }
//       );
//       setIsLoading(false);
//       return response.data;
//     } catch (err) {
//       console.log(err);
//       setIsLoading(false);
//     }
//   };

//   return { postBoard, isLoading };
// };

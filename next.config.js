/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    // SVG 파일을 컴포넌트로 가져오기 위한 설정
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },

  images: {
    domains: ['uncertain.shop'],
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:postId/comment',
  //       destination: `${process.env.NEXT_PUBLIC_API}api/:postId/comment`,
  //     },
  //     {
  //       source: '/api/post',
  //       destination: `${process.env.NEXT_PUBLIC_API}api/post`,
  //     },
  //   ];
  // },
};

// export default nextConfig;
module.exports = nextConfig;

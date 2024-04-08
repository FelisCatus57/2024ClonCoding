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
};

// export default nextConfig;
module.exports = nextConfig;

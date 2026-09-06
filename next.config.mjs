const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'placehold.co' },
      { protocol: 'https', hostname: 'picsum.photos' }
    ]
  },
  webpack: (config) => {
    config.resolve.alias['react/compiler-runtime'] = 'react-compiler-runtime';
    return config;
  }
};

export default nextConfig;

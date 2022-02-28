module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: 'https://helloworld.studiomate.kr/',
  },

  webpack: (config, { dev, isServer }) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

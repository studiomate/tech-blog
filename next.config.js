module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: 'https://studiomate.github.io/tech-blog/',
  },

  webpack: (config, { dev, isServer }) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

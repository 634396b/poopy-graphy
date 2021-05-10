const moduleExports = {
  future: {
    webpack5: true,
  },
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/whales',
        permanent: false,
      },
      {
        source: '/whales',
        destination: '/whales/0x5e90253fbae4dab78aa351f4e6fed08a64ab5590',
        permanent: false,
      },
    ]
  },
}

module.exports = moduleExports

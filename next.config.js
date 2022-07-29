module.exports = {
  reactStrictMode : true,
  async redirects() {
    return [
      {
        source: '/cv',
        destination: 'https://drive.google.com/file/d/16GF7cvCuQlt01ZXWNN0b6NqMcuHxAT6a/view?usp=sharing',
        permanent: true,
      },
    ]
  },
}
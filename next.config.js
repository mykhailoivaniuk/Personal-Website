module.exports = {
  reactStrictMode : true,
  async redirects() {
    return [
      {
        source: '/cv',
        destination: 'https://drive.google.com/file/d/1awCyqfSepFAqVzi69t1jpES9YPR2gkk4/view?usp=sharing',
        permanent: true,
      },
    ]
  },
}

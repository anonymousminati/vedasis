/** @type {import('next').NextConfig} */
const nextConfig = {

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: ["babel-loader",'url-loader',],
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
          },
        },
      },]
  },
}

module.exports = nextConfig

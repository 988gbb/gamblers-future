const Dotenv = require("dotenv-webpack");

module.exports = {
  plugins: [
    new Dotenv({
      systemvars: true, // This allows picking up system environment variables
    }),
  ],
};

require("dotenv").config();

const config = {
  port: global.process.env.PORT,
};
console.log("port: ", config.port);
module.exports = config;

module.exports = ({ env }) => ({
  host: env("HOST", "localhost"),
  port: env.int("PORT", process.env.PORT),
  url: env("", "http://localhost:1337"),
});

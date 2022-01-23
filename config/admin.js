module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'efbc1a9028c86a14998891c5a7c131a2'),
  },
});

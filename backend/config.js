module.exports = {
    PORT: process.env.PORT || 5000,
    DB_URI: process.env.DB_URI || 'your db url key',
    JWT_SECRET: process.env.JWT_SECRET || 'your-secret-key-here',
    JWT_EXPIRATION: '1d'
};

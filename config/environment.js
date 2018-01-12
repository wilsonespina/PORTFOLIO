const env = process.env.NODE_ENV || 'production';
const port  = process.env.PORT || 4000;
const dbURI = process.env.MONGODB_URI || `mongodb://localhost/portfolio-${env}`;
const secret = process.env.AUTH_SECRET || 'hYgs^=?>@qrTfxLp';

module.exports = { port, dbURI, secret, env };

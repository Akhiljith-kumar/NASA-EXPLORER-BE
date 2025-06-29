const allowedOrigins = [
  'http://localhost:5000',
  'https://nasa-explorer-fe.onrender.com'
];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: false,
};

module.exports = corsOptions;

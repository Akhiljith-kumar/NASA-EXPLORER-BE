const express = require('express');
const cors = require('cors');
require('dotenv').config();

const corsOptions = require('./config/corsOptions');
const apiRoutes = require('./routes');

const app = express();
const PORT = process.env.PORT;

// app.use(cors(corsOptions));
app.use(cors({
  origin: '*'
}));
app.use(express.json());

app.use('/api', apiRoutes);

app.listen(PORT, () => console.log(`Server running on ${PORT}`));

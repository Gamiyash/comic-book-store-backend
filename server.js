const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const ComicBookRoutes = require('./routes/comicBooks')

dotenv.config();
const app = express();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.use(express.json());
app.use('/api/comicbooks', ComicBookRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

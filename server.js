const express = require('express');
const { pageRouter } = require('./routes/pages');
const { apiRouter } = require('./routes/notes');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api', apiRouter);

app.use('/', pageRouter);

// base url localhost:3001/
app.listen(PORT, () => {
  console.info(`Server started on http://localhost:${PORT}`);
});
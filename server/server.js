const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, '..', '/client', '/dist')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/htmlRoutes.js')(app);


app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});

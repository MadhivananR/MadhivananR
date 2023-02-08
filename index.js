const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productsRoute');
const dbConfig = require("./db.connection/db.connection");
const cors = require('cors');

// Initialize the Express app
const app = express();
app.use(cors({
  origin: 'http://localhost:4200'
}));
app.use(bodyParser.json());
app.use('/api', userRoutes);
app.use('/api/products', productRoutes);


// Start the Express app
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

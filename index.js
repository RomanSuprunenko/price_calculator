const express = require('express');
const cors = require('cors');
const app = express();
const diamondRoute = require('./routes/diamond');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/swagger.json');

app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: true }));
app.use(cors());

app.use('/diamond', diamondRoute);
// app.use('/swagger', swaggerRoute);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log('Server starter on port ' + port));
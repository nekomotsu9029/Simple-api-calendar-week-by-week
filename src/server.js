const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
require('./database/database.js');

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

app.use(require('./routes/routes.js'));

app.listen(app.get('port'), () => console.log('server on port', app.get('port')))
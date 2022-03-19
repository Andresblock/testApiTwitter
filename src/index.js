const express = require('express');
const routes = require('./routes/routes');
const app = express();
const {engine} = require('express-handlebars');
const path = require('path');

require('./database');

// Definir la ruta de la carpeta donde se hallaran las vistas:
app.set('views',path.join(__dirname,'views'));

// Definicion de las propiedades del motor de plantillas:
app.engine('.hbs', engine({
  layoutsDir: path.join(app.get('views'),'layouts'),
  defaultLayout: 'main',
  extname: '.hbs',
}));

// Definicion del motor de plantillas:
app.set('view engine', '.hbs');

// Configuracion de lectura de formato JSON:
app.use(express.json());

// Configuarion de middleware para captura de datos:
app.use(express.urlencoded({extended: false}));

// Routes
app.use(routes);

app.listen(3001);

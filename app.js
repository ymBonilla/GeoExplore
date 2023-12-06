const express = require('express');
const path = require('path');

const app = express();

// Configurar el motor de vistas EJS
app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'ejs');

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, './src/public')));

//variables
var pestaña = "GeoExplore"

// Rutas para las páginas

// pagina de inicio

app.get ('/', (req,res) => {
  res.render('index',{
      pestaña:pestaña
  })
});

app.get('/map5', (req, res) => {
  res.render('layout', {
      title: 'Zonas de amenaza y lugares turisticos',
      body: 'Amenaza Movimientos en Masa Urbano y Zonas de Interés Turístico Bogotá ',
      script: 'main5.bundle.js'
  });
});

app.get('/map10', (req, res) => {
  res.render('layout', {
      title: 'Señales Informativas Turísticas. Bogotá D.C.',
      body: 'Señales Informativas Turísticas. Bogotá D.C.',
      script: 'main10.bundle.js'
  });
});

app.get('/map11', (req, res) => {
  res.render('layout', {
      title: 'Zonas Interés Turístico y Señales Informativas',
      body: 'Zonas Interés Turístico y Señales Informativas',
      script: 'main11.bundle.js'
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});

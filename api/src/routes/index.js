const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const famososRoute = require('./famosos');
const usuariosRoute = require('./usuarios');
const usuariosGET = require('./usuarios');
const votacionRoute = require('./votacion');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/famosos', famososRoute);
router.use('/usuario', usuariosRoute);
router.use('/usuarios', usuariosGET);
router.use('/votaciones', votacionRoute);

module.exports = router;

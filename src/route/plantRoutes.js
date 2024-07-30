const express = require('express');
const authenticateJWT = require('../middleware/auth');
const { createPlant, getPlants, getPlantById, updatePlant, deletePlant } = require('../con' + 'troller/plantController');

const router = express.Router();

// router.post('/plant',authenticateJWT, createPlant);
// router.get('/plant',authenticateJWT, getPlants);
// router.get('/plant/:id',authenticateJWT, getPlantById);
// router.put('/plant/:id',authenticateJWT, updatePlant);
// router.delete('/plant/:id',authenticateJWT, deletePlant);

router.post('/plant', createPlant);
router.get('/plant', getPlants);
router.get('/plant/:id', getPlantById);
router.put('/plant/:id', updatePlant);
router.delete('/plant/:id', deletePlant);

module.exports = router;

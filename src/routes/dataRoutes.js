const express = require('express');
const { fetchGpuData, fetchCpuData, fetchSsdData } = require('../controllers/dataController');
const { getOSEditions } = require('../controllers/soController');
const { getComponents } = require('../controllers/componentsController');
const router = express.Router();

router.get('/gpus', fetchGpuData);
router.get('/cpus', fetchCpuData);
router.get('/ssds', fetchSsdData);
router.get('/os', getOSEditions);
router.get('/components', getComponents);
//router.get('/scrape/:category', getScrapedData);


module.exports = router;



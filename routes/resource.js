var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var icemagic_controller = require('../controllers/icemagic');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// bakery ROUTES ///
// POST request for creating a bakery.
router.post('/icemagic', icemagic_controller.icemagic_create_post);
// DELETE request to delete bakery.
router.delete('/icemagic/:id', icemagic_controller.icemagic_delete);
// PUT request to update bakery.
router.put('/icemagic/:id', icemagic_controller.icemagic_update_put);
// GET request for one bakery.
router.get('/icemagic/:id', icemagic_controller.icemagic_detail);
// GET request for list of all bakery items.
router.get('/icemagic', icemagic_controller.icemagic_list);
module.exports = router;
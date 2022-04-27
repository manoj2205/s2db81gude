
var express = require('express');
const icemagic_controlers= require('../controllers/icemagic');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
//or redirect to login.
const secured = (req, res, next) => {
    if (req.user){
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('icemagic', { title: 'Search Results icemagic class' });
});



//var express = require('express');
//const icemagic_controlers= require('../controllers/icemagic');
var router = express.Router();
/* GET costumes */
router.get('/', icemagic_controlers.icemagic_view_all_Page );
module.exports = router;

module.exports = router;

/* GET detail bakery page */
router.get('/detail', icemagic_controlers.icemagic_view_one_Page);

/* GET create bakery page */
router.get('/create',secured, icemagic_controlers.icemagic_create_Page);
//router.get('/create',icemagic_controlers.icemagic_create_Page);


/* GET create update page */
router.get('/update',secured, icemagic_controlers.icemagic_update_Page);
//router.get('/update',icemagic_controlers.icemagic_update_Page);

/* GET create bakery page */
router.get('/delete',secured, icemagic_controlers.icemagic_delete_Page);

//router.get('/delete',icemagic_controlers.icemagic_delete_Page);


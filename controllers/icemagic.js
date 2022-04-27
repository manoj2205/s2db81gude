/*
var icemagic = require('../models/icemagic');
// List of all icemagic items
exports.icemagic_list = function(req, res) {
 res.send('NOT IMPLEMENTED: icemagic list');
};

*/
var icemagic = require('../models/icemagic');
// List of all bakerys
exports.icemagic_list = async function(req, res) {
    try{
        theicemagic = await icemagic.find();
        res.send(theicemagic);
    }
    catch(err){
        res.error(500,`{"error": ${err}}`);
    }
    
};

// for a specific icemagic item.
exports.icemagic_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await icemagic.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };



// Handle Costume create on POST.
exports.icemagic_create_post = async function(req, res) {
 console.log(req.body)
 let document = new icemagic();
 // We are looking for a body, since POST does not have query parameters.
 // Even though bodies can be in many different formats, we will be picky
 // and require that it be a json object
 // {"costume_type":"goat", "cost":12, "size":"large"}
 document.icemagic_type = req.body.icemagic_type;
 document.price = req.body.price;
 document.Quantity = req.body.Quantity;
 try{
 let result = await document.save();
 res.send(result);
 }
 catch(err){
 res.status(500);
 res.send(`{"error": ${err}}`);
 }
};


// Handle Costume delete form on DELETE.

exports.icemagic_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await icemagic.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };


// Handle Costume update form on PUT.


exports.icemagic_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await icemagic.findById( req.params.id)
 // Do updates of properties
 if(req.body.icemagic_type)
 toUpdate.icemagic_type = req.body.icemagic_type;
 if(req.body.cost) toUpdate.price = req.body.price;
 if(req.body.size) toUpdate.Quantity = req.body.Quantity;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
};


// List of all Costumes
exports.icemagic_list = async function(req, res) {
    try{
    theicemagic = await icemagic.find();
    res.send(theicemagic);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

   // VIEWS
// Handle a show all view
exports.icemagic_view_all_Page = async function(req, res) {
    try{
    theicemagic = await icemagic.find();
    res.render('icemagic', { title: 'icemagic Search Results', results: theicemagic });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

// Handle a show one view with id specified by query
exports.icemagic_view_one_Page = async function(req, res) {
    console.log("single view for id "  + req.query.id)
    try{
        result = await icemagic.findById( req.query.id)
        res.render('icemagicdetail', { title: 'icemagic Detail', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};





exports.icemagic_create_Page = function(req, res) {
    console.log("create view")
    try{
        res.render('icemagiccreate', { title: 'icemagic Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{"error": Error creating ${err}}`); 
    }
};




exports.icemagic_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await icemagic.findById(req.query.id)
    res.render('icemagicupdate', { title: 'icemagic Update', toShow: result });
    }
    catch(err){
    res.status(500)
    //res.send(`{'error': '${err}'}`);
    }
   };



// Handle a delete one view with id from query
exports.icemagic_delete_Page = async function(req, res) {
    console.log("Delete view for id "  + req.query.id)
    try{
        result = await icemagic.findById(req.query.id)
        res.render('icemagicdelete', { title: 'icemagic Delete', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
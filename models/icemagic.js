const mongoose = require("mongoose")
const icemagicSchema = mongoose.Schema({
Itemname: {
    type: String,
    minLenght :4   
 },
Quantity: Number,
price: {
    type: String,
    minLenght:5
}
})
module.exports = mongoose.model("icemagic",
icemagicSchema)

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mainSchema = new Schema({

    orderNumber: {type: String, required: true},
    firstName: {type: String, required: true}
},
{ collection : 'main' });

module.exports = mongoose.model('main', mainSchema);
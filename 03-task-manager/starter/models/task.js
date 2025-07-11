const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({

      name:{
        type:String,
        required:[true,'must provode name value'],
        trim:true,
        maxlength:[20,'name can not be more than 20 characters']
      },
      completed : {
        type:Boolean,
        default:false,
      }
      


});

module.exports = mongoose.model('Task', TaskSchema);
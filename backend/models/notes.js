const mongoose=require('mongoose');

const schema=mongoose.Schema({
      "id":{
        type: mongoose.Schema.Types.ObjectId,
        required:true
      },
      "companyname":{
        type:String,
      },
      "jobtitle":{
        type:String,
      },
      "applicationstatus":{
        type:String,
      },
      "notes":{
        type:String,
      },
      "date":{
        type:Date,
        default:Date.now()
      },

});

const notesModel=mongoose.model("notes",schema);

module.exports=notesModel;


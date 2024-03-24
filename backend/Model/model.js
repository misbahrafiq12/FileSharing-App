const mongoose = require('mongoose');


const FileModel = mongoose.Schema({
    path:{
    type: String,
    required:true
    },
    name:{
        type:String,
        required:true
    },
    download:{
        type:Number,
        require:true,
        default:0
    }

})

const File =  mongoose.model("FileSharing",FileModel);

module.exports = File;
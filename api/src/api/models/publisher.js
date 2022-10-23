const mongoose =require("mongoose");

const PublisherSchema = new mongoose.Schema({


    company_name : {
        type : String,
        required : true
    },
    
    contact_person : {
        type : String,
        required :true
    },
    
    email : {
    type : String ,
    required :true //backend validation
    
    },
    
    contact_number : {
        type : Number,
        required : true
    },
    
    address : {
        type : String,
        required :true
    },
    

}, { timestamps: true });

module.exports = mongoose.model("Publisher",PublisherSchema);


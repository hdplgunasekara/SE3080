const Joi = require('joi');
const mongoose = require('mongoose');
const  Schema = mongoose.Schema;

const articleSchema = new Schema({
    title :{
        type : String,
        required : true
    },
    description :{
        type : String,
        required : true
    },
    userid : {
        type : String,
        required : true
    },
    status : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    },


},{ timestamps: true });



const Article = mongoose.model("Article",articleSchema);

const validateArticle= (data) => {
	const schema = Joi.object({
        title: Joi.string()
        .label("Title") 
        .min(10)
        .required(),
    
     description: Joi.string()
       .label("Description")
       .min(20)
       .required(),

    
		
	});
	return schema.validate(data);
};

module.exports = {Article,validateArticle};


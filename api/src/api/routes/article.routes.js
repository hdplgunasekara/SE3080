const router = require("express").Router();
const { default: mongoose } = require("mongoose");
let {Article,validateArticle} = require("../models/article");
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');



//add article start 
 
router.post("/add", async (req, res) => {
    const username = req.body.username;
    const title = req.body.title;
    const description = req.body.description;
    const image = req.body.image;

    const articleVal = {
               
        title,
        description,
      
        
}

  
	try {
        const { error } = validateArticle(articleVal);
		if (error)
			return res.status(400).send({ message: error.details[0].message });
        if(!image)
             return res.status(400).send({ message: "Image is not allowed to be empty" });


        const newArticle = new Article({
               
                title,
                description,
                userid:"1",
                status:"Active",
                image:image.base64
        })

		newArticle.save()
		
		res
		.status(201)
		.send({ message: "Added Successfull" });
	} catch (error) {
		
		res.status(500).send({ message: "Server Error" });
	}
});

//add article end

//fetch article start

router.get("/list",async (req, res) => {

	// Article.find({status:"Pending"}).then((articles)=>{
    //     res.json(articles)
    // }).catch((err)=>{
    //     res.status(500).send({ message: "Server Error" });
    // })

    try {
		
        let {page, size}=req.query
        if(!page){
            page=1;
        }
        if(!size){
            size=3;
        }
        
        const limit = parseInt(size);
        const skip = (page-1)*size;
        
        const articles = await Article.find({status:'Active'}).limit(limit).skip(skip);
        
        res.json(articles)
        


	} catch (error) {
		res.sendStatus(500).send({ message: "Internal Server Error" });
	}
});


//fetch article end

router.get("/all",async (req, res) => {

	// Article.find({status:"Pending"}).then((articles)=>{
    //     res.json(articles)
    // }).catch((err)=>{
    //     res.status(500).send({ message: "Server Error" });
    // })

    try {
	           
        const articles = await Article.find();
        res.json(articles)
        

	} catch (error) {
		res.sendStatus(500).send({ message: "Internal Server Error" });
	}
});



//search article start


router.get("/search",async (req, res) => {
    var search = new RegExp(req.query.search);
    

    try {
		
        let {page, size}=req.query
        if(!page){
            page=1;
        }
        if(!size){
            size=3;
        }
        
        const limit = parseInt(size);
        const skip = (page-1)*size;
        // const count=  await Note.find({status : 'Active', userid:userid}).count();
        const articles = await Article.find({title: search,status : 'Active'}).limit(limit).skip(skip);
        
        res.json(articles)


	} catch (error) {
		res.sendStatus(500).send({ message: "Internal Server Error" });
	}
});

//searc article end

//update article start

router.put("/update/:id",async(req ,res)=>{

    let articleId = req.params.id;
    const{title,description}=req.body;
    const image = req.body.image;
    

    const articleVal = {            
        title,
        description,    
}

    const { error } = validateArticle(articleVal);
    if (error)
        return res.status(400).send({ message: error.details[0].message });
    if(!image)
         return res.status(400).send({ message: "Image is not allowed to be empty" });

    const updateArticle={
        title,
        description,
        

        
    }
    const update = await Article.findByIdAndUpdate(articleId,updateArticle).then(()=>{
        res.status(200).send({status: "Article updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data",error:err.message})
    })


});

//update article end

//delete article start

router.put("/delete/:id",async(req ,res)=>{

    let articleId = req.params.id;

    const updateArticle={
        status:"Deleted"        
    }

    const update = await Article.findByIdAndUpdate(articleId,updateArticle).then(()=>{
        res.status(200).send({status: "Article deleted"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data",error:err.message})
    })


});

//delete articel end

//active article start

router.put("/active/:id",async(req ,res)=>{

    let articleId = req.params.id;

    try {

        const updateArticle={
            status:"Active"        
        }
        
        const update = await Article.findByIdAndUpdate(articleId,updateArticle).then(()=>{
            res.status(200).send({status: "Article Accepted"})
        }).catch((err)=>{
            console.log(err);
            res.status(500).send({status:"Error with accepting article",error:err.message})
        })
        
    } catch (error) {

        res.status(500).send({ message: "Server Error" });
        
    }

   


});
//active article end






module.exports = router;

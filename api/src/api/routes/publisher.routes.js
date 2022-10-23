const router = require("express").Router();

const publisher = require("../models/publisher");

//ADD PUBLISHER
router.post("/addpublisher", async(req, res) => {
    const newPublisher = new publisher({
        company_name:req.body.company_name,
        contact_person:req.body.contact_person,
        email:req.body.email,
        contact_number:req.body.contact_number,
        address : req.body.address ,
    });
    console.log(newPublisher)
    // let code = 1;
    try{
        // const publishercount=await publisher.find().sort({_id:-1}).limit(1)
        // if(publishercount.length > 0)
        //   code += publishercount[0].code
        // newPublisher.company_name='PU'+ code;
        // newPublisher.code = code;
        try{
        const savedPublisher = await newPublisher.save();
        res.status(200).json(savedPublisher);
        }catch(err){
          res.status(500).json(err);
        }
        
    }catch(error){
        console.log(error)
    }
    
});

//UPDATE PUBLISHER

// router.put("/updatepublisher/:id",async(req, res) => {
//   try{
//       // console.log("123");
//             await book.findOneAndUpdate({_id:req.params.id},
//         {
//           $set: req.body
//         },
//         {new:true}
//       );
//       res.status(200).json("Publisher details updated");
      
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   })

router.put("/updatepublisher/:id",async(req ,res)=>{

  let publisherId = req.params.id;
  const{company_name, contact_person,email,contact_number,address}=req.body;

  const updatepublisher={

    company_name, contact_person,email,contact_number,address

  }
  const update = await publisher.findByIdAndUpdate(publisherId,updatepublisher).then(()=>{
      res.status(200).send({status: "Publisher updated"})
  }).catch((err)=>{
      console.log(err);
      res.status(500).send({status:"Error with updating data",error:err.message})
  })
});
/*router.put("/updatepublisher/:id",async(req, res) => {
  try{
      // console.log("123");
            await publisher.findByIdAndUpdate({'_id':req.params.id},
        {
          $set: req.body
        },
        {new:true}
      );
      res.status(200).json("publisher details updated");
      
    } catch (err) {
      res.status(500).json(err);
    }
  })*/

  
//DELETE PUBLISHER
router.delete("/deletepublisher/:id", async(req, res) => {
    try {
            await publisher.findOneAndDelete({_id:req.params.id});
            res.status(200).json("Publisher has been deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  })



//GET SPECIFIC PUBLISHER
router.get("/:id", async(req, res) => {

    try {
        const publishers = await publisher.findOne({_id:req.params.id});
        res.status(200).json(publishers);
    } catch (err) {
        res.status(500).json(err);
    }
});



//GET ALL PUBLISHERS
router.get("/", async(req, res) => {
    try {
        const publishers = await publisher.find();
        res.status(200).json(publishers);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET PUBLISHER ACCORDING TO NAME
router.get("/grpub/:company_name", async (req, res) => {
  try {
    const publishers = await publisher.find({ company_name: req.params.company_name });
    res.status(200).json(publishers);
  } catch (err) {
    return res.status(500).json(err);
  }
});


module.exports = router;
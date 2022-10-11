const router = require("express").Router();

const book = require("../models/book");

//ADD BOOK
router.post("/addbook", async(req, res) => {
    const newBook = new book({
        bookID:req.body.bookID,
        bkName:req.body.bkName,
        bkAuthor:req.body.bkAuthor,
        bkCategory:req.body.bkCategory,
        bkPublisher:req.body.bkPublisher,
    });
    let code = 1;
    try{
        const bookcount=await book.find().sort({_id:-1}).limit(1)
        if(bookcount.length > 0)
          code += bookcount[0].code
        newBook.bookID='BK'+ code;
        newBook.code = code;
        try{
        const savedBook = await newBook.save();
        res.status(200).json(savedBook);
        }catch(err){
          res.status(500).json(err);
        }
        
    }catch(error){
        console.log(error)
    }
    
});

module.exports = router;
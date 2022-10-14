const router = require("express").Router();

const book = require("../models/book");

//ADD BOOK
router.post("/addbook", async (req, res) => {
  const newBook = new book({
    bookID: req.body.bookID,
    bkName: req.body.bkName,
    bkAuthor: req.body.bkAuthor,
    bkCategory: req.body.bkCategory,
    bkPublisher: req.body.bkPublisher,
  });
  let code = 1;
  try {
    const bookcount = await book.find().sort({ _id: -1 }).limit(1);
    if (bookcount.length > 0) code += bookcount[0].code;
    newBook.bookID = "BK" + code;
    newBook.code = code;
    try {
      const savedBook = await newBook.save();
      res.status(200).json(savedBook);
    } catch (err) {
      res.status(500).json(err);
    }
  } catch (error) {
    console.log(error);
  }
});

//UPDATE BOOK
router.put("/updatebook/:id", async (req, res) => {
  try {
    // console.log("123");
    await book.findOneAndUpdate(
      { bookID: req.params.id },
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json("Book details updated");
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE BOOK
router.delete("/deletebook/:id", async (req, res) => {
  try {
    await book.findOneAndDelete({ bookID: req.params.id });
    res.status(200).json("Book has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET BOOK
router.get("/:id", async (req, res) => {
  try {
    const books = await book.findOne({ bookID: req.params.id });
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL
router.get("/", async (req, res) => {
  try {
    const books = await book.find();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET BOOK ACCORDING TO CATEGORY
router.get("/grbk/:bkCategory", async (req, res) => {
  try {
    const books = await book.find({ bkCategory: req.params.bkCategory });
    res.status(200).json(books);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;

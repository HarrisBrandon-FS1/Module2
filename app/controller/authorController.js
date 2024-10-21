const Authors = require("../models/Authors");

const getAllAuthors =  async (req, res) => {
    const authors = await Authors.find({})
    res.status(200).json({
      data: authors,
      success: true,
      message: `${req.method} - request to Author endpoint`
    });  
  };

  const getAuthorById = async (req, res) => {
    const { id } = req.params;
    const authorFind = await Authors.findById(id)
    res.status(200).json({
      authorFind,
      success: true,
      message: `${req.method} - request to Author endpoint`
    });  
  };

  const createAuthor = async (req, res) => {
    const { author } = req.body;
    const newAuthor = await Authors.create(author);
    console.log("data >>>", newAuthor);
    res.status(200).json({
      success: true,
      message: `${req.method} - request to Author endpoint`
    });  
  };

  const updateAuthor = async (req, res) => {
    const { id } = req.params;
    const author = await Authors.findByIdAndUpdate(id,req.body, {new: true});
    res.status(200).json({
      data: author,
      success: true,
      message: `${req.method} - request to Author endpoint`
    });  
  };

  const deleteAuthor = async (req, res) => {
    const { id } = req.params;
    const authorDelete = await Authors.findByIdAndDelete(id)    
    res.status(200).json({
      authorDelete,
      success: true,
      message: `${req.method} - request to Author endpoint`
    });  
  };

  module.exports = {
    createAuthor,
    getAllAuthors,
    getAuthorById,
    updateAuthor,
    deleteAuthor,
    
  }
  
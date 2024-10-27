const Trainers = require("../models/Trainers");

const getAllTrainers =  async (req, res) => {
    const trainers = await Trainers.find({})
    res.status(200).json({
      data: trainers,
      success: true,
      message: `${req.method} - request to Trainers endpoint`
    });  
  };

  const getTrainerById = async (req, res) => {
    const { id } = req.params;
    const trainerFind = await Trainers.findById(id)
    res.status(200).json({
      trainerFind,
      success: true,
      message: `${req.method} - request to Trainer endpoint`
    });  
  };

  const createTrainer = async (req, res) => {
    const { Trainer } = req.body;
    try {
        const newTrainer = await Trainers.create(Trainer);
        console.log("data >>>", newTrainer);
        res.status(200).json({
            data: newTrainer,
          success: true,
          message: `${req.method} - request to Trainer endpoint`
        });  
    } catch (error) {
        if(error.name = "ValidationError ") {
            console.error("Error Validating!", error);
            res.status(422).json(error);
        }else{
            console.error(error);
            res.status(500).json(error);
        }
    };

  };

  const updateTrainer = async (req, res) => {
    const { id } = req.params;
    const trainer = await Trainers.findByIdAndUpdate(id,req.body, {new: true});
    res.status(200).json({
      data: trainer,
      success: true,
      message: `${req.method} - request to Trainer endpoint`
    });  
  };

  const deleteTrainer = async (req, res) => {
    const { id } = req.params;
    const trainerDelete = await Trainers.findByIdAndDelete(id)    
    res.status(200).json({
      trainerDelete,
      success: true,
      message: `${req.method} - request to Trainer endpoint`
    });  
  };

  module.exports = {
    createTrainer,
    getAllTrainers,
    getTrainerById,
    updateTrainer,
    deleteTrainer,
    
  }
  
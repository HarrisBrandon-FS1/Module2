const express = require("express");
const router = express.Router();
const trainerRoutes = require("./trainerRoutes");
const pokemonRoutes = require("./pokemonRoutes");

router.get("/", (req, res) => {
    res.status(200).json({ success: true , message:`${req.method} - Request made`});
});

router.use("/pokemon", pokemonRoutes)
router.use("/trainers", trainerRoutes)

module.exports = router;
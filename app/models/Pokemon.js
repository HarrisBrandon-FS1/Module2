const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            maxlength: [50, "Name cannot be more than 50 characters"],
        },
        type: {
            type: [String],
            required: true,
            enum: [
                "Water",
                "Fire",
                "Ground",
                "Rock",
                "Fairy",
                "Dark",
                "Lightning",
                "Grass",
                "Normal",
                "Psychic",
                "Flying",
                "Fighting",
                "Ice",
                "Bug",
                "Ghost",
                "Steel",
                "Dragon",
                "Poison",
            ],
        },
        hpStatRange: {
            type: Number,
            min: [1, "Stat must be at least 1"],
            max: [700, "Stat cannot be more than 700"],
        },
        atkStatRange: {
            type: Number,
            min: [1, "Stat must be at least 1"],
            max: [700, "Stat cannot be more than 700"],
        },
        defStatRange: {
            type: Number,
            min: [1, "Stat must be at least 1"],
            max: [700, "Stat cannot be more than 700"],
        },
        sp_atkStatRange: {
            type: Number,
            min: [1, "Stat must be at least 1"],
            max: [700, "Stat cannot be more than 700"],
        },
        sp_defStatRange: {
            type: Number,
            min: [1, "Stat must be at least 1"],
            max: [700, "Stat cannot be more than 700"],
        },
        spdStatRange: {
            type: Number,
            min: [1, "Stat must be at least 1"],
            max: [700, "Stat cannot be more than 700"],
        },
        trainer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Trainer",
        },
    },
    { timestamps: true}
);

module.exports = mongoose.model("pokemon", pokemonSchema);
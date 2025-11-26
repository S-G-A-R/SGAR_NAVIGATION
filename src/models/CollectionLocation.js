const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["Point"], // 'location.type' must be 'Point'
    default: "Point",
  },
  coordinates: {
    type: [Number], // Array of numbers: [longitude, latitude]
    required: true,
  },
});

const collectionLocationSchema = new mongoose.Schema(
  {
    idCenter: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CollectionCenter",
      required: true,
    },
    location: {
      type: locationSchema,
      index: "2dsphere",
      required: true,
    },
    descripcion: {
      type: String,
    },
    horaApertura: {
      type: String,
      required: true,
    },
    horaCierre: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('CollectionLocation', collectionLocationSchema);
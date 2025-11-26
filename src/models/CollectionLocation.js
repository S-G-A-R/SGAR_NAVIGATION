const mongoose = require('mongoose');

const collectionLocationSchema = new mongoose.Schema(
  {
    idCenter: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CollectionCenter",
      required: true,
    },
    location: {
      type: {
        type: String,
        enum: ['Point'],
      },
      coordinates: {
        type: [Number], // [longitude, latitude]
        required: true,
      },
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
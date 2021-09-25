import mongoose from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';

const commentSchema = new mongoose.Schema(
  {
    text: { type: String, required: true, maxLength: 500 },
    rating: { type: Number, required: true, min: 1, max: 10 },
    createdBy: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

const albumSchema = new mongoose.Schema({
  title: String,
  releaseYear: Number,
  label: String,
  format: Array,
  peakChartPositions: Array,
  sales: Array,
  comments: [commentSchema],
  singles: [{ type: mongoose.Types.ObjectId, ref: 'Single' }],
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
});

albumSchema.plugin(mongooseUniqueValidator);

const Album = mongoose.model('Album', albumSchema);

export default Album;

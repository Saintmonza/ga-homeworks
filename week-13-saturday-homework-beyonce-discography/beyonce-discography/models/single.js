import mongoose from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';

const singleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  albums: [{ type: mongoose.Types.ObjectId, ref: 'Album' }],
});

singleSchema.plugin(mongooseUniqueValidator);

const Single = mongoose.model('Single', singleSchema);

export default Single;

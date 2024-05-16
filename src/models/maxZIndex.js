import mongoose, { Schema } from 'mongoose';

const ZIndexSchema = new Schema({
  maxZIndex: Number,
});

const MaxZIndexModel = mongoose.model('zIndex', ZIndexSchema);

export default MaxZIndexModel;

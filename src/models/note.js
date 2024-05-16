import mongoose, { Schema } from 'mongoose';

const NoteSchema = new Schema({
  title: String,
  x: Number,
  y: Number,
  zIndex: Number,
  content: String,
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
});

const NoteModel = mongoose.model('Note', NoteSchema);

export default NoteModel;

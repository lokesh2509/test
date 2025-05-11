const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/awt_final')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Connection error:', err));

// Define Schema
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  publisher: String,
  price: Number
});

// Create Model
const Book = mongoose.model('Book', bookSchema);

// CRUD Operations
async function runCRUD() {
  try {
    // INSERT
    const newBook = new Book({
      title: 'Atomic Habits',
      author: 'James Clear',
      publisher: 'Penguin',
      price: 450
    });
    await newBook.save();
    console.log('Book inserted');

    // DISPLAY ALL
    const allBooks = await Book.find();
    console.log('All Books:\n', allBooks);

    // DISPLAY ONE
    const oneBook = await Book.findOne({ title: 'Atomic Habits' });
    console.log('One Book:\n', oneBook);

    // UPDATE
    const updated = await Book.updateOne(
      { title: 'Atomic Habits' },
      { $set: { price: 499 } }
    );
    console.log('Book updated:', updated);

    // DELETE
    const deleted = await Book.deleteOne({ title: 'Atomic Habits' });
    console.log('Book deleted:', deleted);

  } catch (err) {
    console.error('Error:', err);
  } finally {
    mongoose.connection.close();
  }
}

runCRUD();

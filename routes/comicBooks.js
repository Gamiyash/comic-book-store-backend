const express = require('express');
const ComicBook = require('../models/ComicBookSchema');
const router = express.Router();

// Create a comic book
router.post('/', async (req, res) => {
  try {
    const comicBook = new ComicBook(req.body);
    await comicBook.save();
    res.status(201).json(comicBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all comic books with pagination, filtering, and sorting
router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 10, sortBy = 'name', order = 'asc', author, year, condition } = req.query;
    const filter = {};
    if (author) filter.author = author;
    if (year) filter.year = year;
    if (condition) filter.condition = condition;

    const comicBooks = await ComicBook.find(filter)
      .sort({ [sortBy]: order === 'asc' ? 1 : -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);
    
    const count = await ComicBook.countDocuments(filter);

    res.json({ total: count, pages: Math.ceil(count / limit), comicBooks });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get comic book by ID
router.get('/:id', async (req, res) => {
  try {
    const comicBook = await ComicBook.findById(req.params.id);
    if (!comicBook) return res.status(404).json({ message: 'Comic Book not found' });
    res.json(comicBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a comic book
router.put('/:id', async (req, res) => {
  try {
    const comicBook = await ComicBook.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!comicBook) return res.status(404).json({ message: 'Comic Book not found' });
    res.json(comicBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a comic book
router.delete('/:id', async (req, res) => {
  try {
    const comicBook = await ComicBook.findByIdAndDelete(req.params.id);
    if (!comicBook) return res.status(404).json({ message: 'Comic Book not found' });
    res.json({ message: 'Comic Book deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

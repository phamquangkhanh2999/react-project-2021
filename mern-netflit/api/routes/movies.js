const router = require('express').Router();
const Movie = require('../models/Movie');
const verify = require('../verifyToken');

// CREATE
router.post('/', verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newMovie = new Movie(req.body);
    try {
      const savedMovie = await newMovie.save();
      res.status(200).json(savedMovie);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json('You are not allowed!');
  }
});

//UPDATE
router.put('/:id', verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const updateMovie = await Movie.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updateMovie);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json('You are not allowed!');
  }
});

// DELETE
router.delete('/:id', verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await Movie.findByIdAndDelete(req.params.id);
      res.status(200).json('Movie has been delete...');
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json('You are not allowed!');
  }
});

//GET
router.get('/find/:id', async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET RAMDOM

router.get('/random', verify, async (req, res) => {
  const type = req.query.type;
  let movie;

  try {
    if (type === 'series') {
      movie = await Movie.aggregate([
        { $match: { isSeries: true } },
        { $sample: { size: 1 } },
      ]);
    } else {
      movie = await Movie.aggregate([
        { $match: { isSeries: false } },
        { $sample: { size: 1 } },
      ]);
    }
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL
router.get('/', verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const movies = await Movie.find();
      res.status(200).json(movies.reverse());
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json('You are not allowed!');
  }
});

module.exports = router;
// ma xac nhan
//Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNzE3YzU3Y2EyNWM3N2U4YjRkODlmMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNDg3MDc3NSwiZXhwIjoxNjM1MzAyNzc1fQ.4KLRp3ymLAYIIKmXBaiqMGm7aTBuJPqae1La2h2ea2o


const exress = require('express')
const router = exress.Router();
const User = require('../model/User')
router.get('/', async (req, res) => {
    try {
      const bookings = await User.findAll();
      res.json(bookings);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // Add a new booking
  router.post('/', async (req, res) => {
    try {
      const booking = await User.create(req.body);
      res.status(201).json(booking);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // Delete a booking by id
  router.delete('/:id', async (req, res) => {
    try {
      const bookingId = req.params.id;
      await User.destroy({ where: { id: bookingId } });
      res.sendStatus(204);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // Update a booking by id
  router.put('/:id', async (req, res) => {
    try {
      const bookingId = req.params.id;
      const [ updatedCount, updatedRows ] = await User.update(req.body, { where: { id: bookingId } });
      if (updatedCount === 0) {
        res.sendStatus(404);
      } else {
        res.json(updatedRows[0]);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
module.exports = router;
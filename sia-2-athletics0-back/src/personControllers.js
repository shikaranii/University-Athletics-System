const express = require('express');
const personService = require('../services/personService');

const router = express.Router();

// Create
router.post('/persons', async (req, res) => {
  try {
    const newPerson = await personService.createPerson(req.body);
    res.json(newPerson);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create person' });
  }
});

// Read all
router.get('/persons', async (req, res) => {
  try {
    const persons = await personService.getPersons();
    res.json(persons);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve persons' });
  }
});

// Read one
router.get('/persons/:id', async (req, res) => {
  try {
    const personId = parseInt(req.params.id);
    const person = await personService.getPersonById(personId);
    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }
    res.json(person);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve person' });
  }
});

// Update
router.put('/persons/:id', async (req, res) => {
  try {
    const personId = parseInt(req.params.id);
    const updatedPerson = await personService.updatePerson(personId, req.body);
    res.json(updatedPerson);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update person' });
  }
});

// Delete
router.delete('/persons/:id', async (req, res) => {
  try {
    const personId = parseInt(req.params.id);
    await personService.deletePerson(personId);
    res.json({ message: 'Person deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete person' });
  }
});

module.exports = router;

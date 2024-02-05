// personService.js

const prisma = require('../path-to-your-prisma-client');

const createPerson = async (personData) => {
  try {
    const newPerson = await prisma.person.create({
      data: {
        name: personData.name,
        emergencyContact: personData.emergencyContact,
        emergencyContactPerson: personData.emergencyContactPerson,
        nationalityId: personData.nationalityId,
        weight: personData.weight,
        height: personData.height,
        bloodId: personData.bloodId,
        acadYear: personData.acadYear,
        statusId: personData.statusId,
        // Add other fields as needed
      },
    });

    return newPerson;
  } catch (error) {
    console.error('Error creating person:', error);
    throw error; // Re-throw the error for handling at a higher level if needed
  }
};

// ... other person-related functions ...

module.exports = {
  createPerson,
  // ... other person-related function exports ...
};

// Example usage in a controller or route file

const personService = require('../path-to-personService/personService');

const createPersonHandler = async (req, res) => {
  try {
    const newPerson = await personService.createPerson(req.body);
    res.status(201).json(newPerson);
  } catch (error) {
    console.error('Error creating person:', error);
    res.status(500).send('Internal Server Error');
  }
};

// ... other route handlers for persons ...

module.exports = {
  createPersonHandler,
  // ... other route handlers exports ...
};

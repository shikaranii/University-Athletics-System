const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const personService = {
  createPerson: async (data) => {
    return prisma.person.create({ data });
  },

  getPersons: async () => {
    return prisma.person.findMany();
  },

  getPersonById: async (id) => {
    return prisma.person.findUnique({ where: { id } });
  },

  updatePerson: async (id, data) => {
    return prisma.person.update({ where: { id }, data });
  },

  deletePerson: async (id) => {
    return prisma.person.delete({ where: { id } });
  },
};

module.exports = personService;

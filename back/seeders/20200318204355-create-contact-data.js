module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('contact', [
      {
        id: 1,
        name: 'Giovanni',
        email: 'giovanni@gmail.com',
        subject: 'Oportunidade',
        message: 'Olá, adorei o seu portifólio!',
        created_at: '2020-01-18 15:02:28',
        updated_at: '2020-01-21 12:31:00',
        deleted_at: null,
      },
    ]);
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('contact', {});
  },
};

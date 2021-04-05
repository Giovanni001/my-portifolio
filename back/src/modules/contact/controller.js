const service = require('./service');

module.exports = {
  contact: async (req, res, next) => {
    const data = req.body;
    try {
      await service.create(data);
      res.send();
    } catch (err) {
      next(err);
    }
  },
};

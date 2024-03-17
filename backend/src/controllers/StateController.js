import Region from "../models/Region";
import State from "../models/State";

class StateController {
  async index(req, res) {
    try {
      const states = await State.findAll({
        attributes: ['id', 'acronym', 'name', 'region'],
        order: ['name'],
      });
      return res.json(states);
    } catch (e) {
      return res.status(400).json({
        errors: ['Search error'],
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Missing ID'],
        });
      }

      const state = await State.findByPk(id, {
        attributes: ['id', 'acronym', 'name'],
        include: {
          model: Region,
          attributes: ['id', 'acronym', 'name'],
        },
      });

      if (!state) {
        return res.status(400).json({
          errors: ['State doesn\'t exists'],
        });
      }

      return res.json(state);
    } catch (e) {
      return res.status(400).json({
        errors: ['Search error'],
      });
    }
  }
}

export default new StateController();

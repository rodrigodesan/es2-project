import CommitmentTerm from "../models/CommitmentTerm";
import Resource from "../models/Resource";

class ResourceController {
  async index(req, res) {
    try {
      const resources = await Resource.findAll({
        attributes: ['id', 'item', 'initiative', 'object', 'value'],
      });
      return res.json(resources);
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

      const resource = await Resource.findByPk(id, {
        attributes: ['id', 'item', 'initiative', 'object', 'value'],
        include: {
          model: CommitmentTerm,
          attributes: ['id', 'cnpj', 'entity', 'companyName', 'process', 'term', 'value', 'validityStart', 'validityEnd'],
        },
      });

      if (!resource) {
        return res.status(400).json({
          errors: ['Resource doesn\'t exists'],
        });
      }

      return res.json(resource);
    } catch (e) {
      return res.status(400).json({
        errors: ['Search error'],
      });
    }
  }
}

export default new ResourceController();

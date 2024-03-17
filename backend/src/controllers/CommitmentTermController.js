import CommitmentTerm from "../models/CommitmentTerm";

class CommitmentTermController {
  async index(req, res) {
    try {
      const terms = await CommitmentTerm.findAll({
        attributes: ['id', 'cnpj', 'entity', 'companyName', 'process', 'term', 'value', 'validityStart', 'validityEnd', 'year', 'state', 'resource'],
        order: ['validityStart'],
      });
      return res.json(terms);
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

      const term = await CommitmentTerm.findByPk(id, {
        attributes: ['id', 'cnpj', 'entity', 'companyName', 'process', 'term', 'value', 'validityStart', 'validityEnd', 'year', 'state', 'resource'],
      });

      if (!term) {
        return res.status(400).json({
          errors: ['CommitmentTerm doesn\'t exists'],
        });
      }

      return res.json(term);
    } catch (e) {
      return res.status(400).json({
        errors: ['Search error'],
      });
    }
  }
}

export default new CommitmentTermController();

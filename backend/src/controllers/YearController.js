import CommitmentTerm from "../models/CommitmentTerm";
import Year from "../models/Year";

class YearController {
  async index(req, res) {
    try {
      const years = await Year.findAll({
        attributes: ['id', 'year'],
        order: ['year'],
      });
      return res.json(years);
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

      const year = await Year.findByPk(id, {
        attributes: ['id', 'year'],
        order: ['year'],
        include: {
          model: CommitmentTerm,
          attributes: ['cnpj', 'entity', 'companyName', 'process', 'term', 'value', 'validityStart', 'validityEnd'],
        },
      });

      if (!year) {
        return res.status(400).json({
          errors: ['Year doesn\'t exists'],
        });
      }

      return res.json(year);
    } catch (e) {
      return res.status(400).json({
        errors: ['Search error'],
      });
    }
  }
}

export default new YearController();

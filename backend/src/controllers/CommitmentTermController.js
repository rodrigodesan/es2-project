import sequelize from 'sequelize';
import CommitmentTerm from "../models/CommitmentTerm";
import State from '../models/State';
import Resource from '../models/Resource';

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

  async statesByCommitmentTerms(req, res) {
    try {
      const {
        yearId, maxStates, regionId, order,
      } = req.query;

      const states = await CommitmentTerm.findAll({
        attributes: [
          'state',
          [sequelize.fn('COUNT', sequelize.col('state')), 'num_commitment_terms'],
        ],
        where: {
          year: yearId || { [sequelize.Op.ne]: null },
        },
        include: [{
          model: State,
          where: regionId ? { region: regionId } : {},
          attributes: ['id', 'name', 'acronym'],
        }],
        group: ['state', 'State.id'],
        order: [['num_commitment_terms', order && order.match(/ASC|DESC|asc|desc/) ? order : 'ASC']],
        limit: maxStates || 27,
      });
      return res.json(states);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: ['Search error'],
      });
    }
  }

  async averageDurationOfVigency(req, res) {
    try {
      const {
        stateId, resourceId,
      } = req.query;

      const result = await CommitmentTerm.findAll({
        attributes: [
          [sequelize.fn('avg', sequelize.literal('validity_end - validity_start')), 'avg_duration'],
        ],
        where: {
          state: stateId || { [sequelize.Op.ne]: null },
          resource: resourceId || { [sequelize.Op.ne]: null },
        },
      });
      return res.json(result);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: ['Search error'],
      });
    }
  }

  async statesByAverageVigency(req, res) {
    try {
      const {
        maxStates, regionId, order,
      } = req.query;

      const states = await CommitmentTerm.findAll({
        attributes: [
          [sequelize.fn('AVG', sequelize.literal('validity_end - validity_start')), 'avg_duration'],
        ],
        include: {
          model: State,
          where: regionId ? { region: regionId } : {},
          attributes: ['id', 'name', 'acronym'],
        },
        group: ['State.id'],
        order: [[sequelize.literal('avg_duration'), order && order.match(/ASC|DESC|asc|desc/) ? order : 'ASC']],
        limit: maxStates || 27,
      });
      return res.json(states);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: ['Search error'],
      });
    }
  }

  async statesByAverageValue(req, res) {
    try {
      const {
        yearId, maxStates, regionId,
      } = req.query;

      const states = await CommitmentTerm.findAll({
        attributes: [
          [sequelize.fn('AVG', sequelize.col('value')), 'avg_value'],
        ],
        where: {
          year: yearId || { [sequelize.Op.ne]: null },
        },
        include: {
          model: State,
          where: regionId ? { region: regionId } : {},
          attributes: ['id', 'name', 'acronym'],
        },
        group: ['State.id'],
        order: [['avg_value', 'DESC']],
        limit: maxStates,
      });
      return res.json(states);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: ['Search error'],
      });
    }
  }

  async resourcesByTerms(req, res) {
    try {
      const {
        yearId, stateId, regionId,
      } = req.query;

      const resources = await CommitmentTerm.findAll({
        attributes: [
          [sequelize.fn('COUNT', sequelize.col('resource')), 'num_processes'],
        ],
        where: {
          year: yearId || { [sequelize.Op.ne]: null },
          state: stateId || { [sequelize.Op.ne]: null },
        },
        include: [
          {
            model: Resource,
            attributes: ['id', 'item', 'initiative', 'object', 'value'],
          },
          {
            model: State,
            where: regionId ? { region: regionId } : {},
            attributes: [],
          },
        ],
        group: ['Resource.id'],
        order: [[sequelize.literal('num_processes'), 'DESC']],
      });
      return res.json(resources);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: ['Search error'],
      });
    }
  }
}

export default new CommitmentTermController();

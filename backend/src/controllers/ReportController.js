import Report from '../models/Report';
import SavedSearch from '../models/SavedSearch';

class ReportController {
  async store(req, res) {
    try {
      const userId = req.userId;

      req.body.user = userId;

      const savedSearchId = req.body.saved_search;

      const savedSearch = await SavedSearch.findByPk(savedSearchId);

      if (!savedSearch) {
        return res.status(400).json({
          errors: ['Search does not exist'],
        });
      }

      const newReport = await Report.create(req.body);

      const { id, user, saved_search, title, descripton, term } = newReport;

      return res.json({ id, user, saved_search, title, descripton, term });
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const userId = req.userId;
      const savedSearchId = req.params.search;

      const reports = await Report.findAll({
        where: {
          user: userId,
          saved_search: savedSearchId
        }
      });

      return res.json(reports);

    } catch (e) {
      console.log(e)
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }

  async show(req, res) {
    try {
      const id = req.params.id;

      const report = await Report.findByPk(id);

      if (!report) {
        return res.status(400).json({
          errors: ['Report does not exist'],
        });
      }

      return res.json(report);

    } catch (e) {
      console.log(e)
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }

  async update(req, res) {
    try {
      const reportId = req.params.id;

      const report = await Report.findByPk(reportId);

      if (!report) {
        return res.status(400).json({
          errors: ['Report Does Not Exist'],
        });
      }

      const newData = await report.update(req.body);
      const { id, user, saved_search, title, descripton, term } = newData;
      return res.json({ id, user, saved_search, title, descripton, term });
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const id = req.params.id;
      const report = await Report.findByPk(id);

      if (!report) {
        return res.status(400).json({
          errors: ['Report does not exist'],
        });
      }

      report.destroy();
      return res.json("Report deleted successfully");
    } catch (e) {
      console.log(e)
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }
}

export default new ReportController;
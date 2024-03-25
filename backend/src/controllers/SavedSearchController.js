import SavedSearch from "../models/SavedSearch"

class SavedSearchController {
  async store(req, res) {
    try {
      const userId = req.userId;

      req.body.user = userId;

      const newSavedSearch = await SavedSearch.create(req.body);

      const { user, term, filter1, filter2, filter3 } = newSavedSearch;
      return res.json({ user, term, filter1, filter2, filter3 });

    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }

  async index(req, res) {
    try {
      const userId = req.userId;

      const savedSearches = await SavedSearch.findAll({
        where: {
          user: userId
        }
      });

      return res.json(savedSearches);

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

      const savedSearch = await SavedSearch.findByPk(id);

      if (!savedSearch) {
        return res.status(400).json({
          errors: ['Search does not exist'],
        });
      }

      return res.json(savedSearch);

    } catch (e) {
      console.log(e)
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }

  async delete(req, res) {
    try {
      const id = req.params.id;
      const savedSearch = await SavedSearch.findByPk(id);

      if (!savedSearch) {
        return res.status(400).json({
          errors: ['Search does not exist'],
        });
      }

      savedSearch.destroy();
      return res.json("Search deleted successfully");
    } catch (e) {
      console.log(e)
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }
}

export default new SavedSearchController();

import SavedSearch from "../models/SavedSearch"

class SavedSearchController {
  async save(req, res) {
    try {
      const userId = req.userId;

      req.body.user = userId;

      const newSavedSearch = await SavedSearch.create(req.body);

      const { user, termo, filtro1, filtro2, filtro3 } = newSavedSearch;
      return res.json({ user, termo, filtro1, filtro2, filtro3 });

    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }

  async list(req, res) {
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

      console.log(id);

      const savedSearch = await SavedSearch.findByPk(id);

      console.log(savedSearch);

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

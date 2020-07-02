import User from '../models/Users';

class UserController {
  async create(req, res) {
    try {
      const novoUser = await User.create(
        req.body,
      );

      return res.json(novoUser);
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }

  // Index - Show All
  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json({
        user: req.userId,
        email: req.userEmail,
        users,
      });
    } catch (error) {
      return res.json(null);
    }
  }

  // Show - Specific User
  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      return res.json(user);
    } catch (error) {
      return res.json(null);
    }
  }

  // Update - Change one user
  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['Missing user Id'],
        });
      }
      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          errors: ['User not found!'],
        });
      }

      const updatedUser = await user.update(req.body);

      return res.json(updatedUser);
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }

  // Delete - Delete one user
  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['Missing user Id'],
        });
      }
      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          errors: ['User not found!'],
        });
      }

      await user.destroy();

      return res.json(user);
    } catch (error) {
      return res.status(400).json({ errors: error.errors.map((err) => err.message) });
    }
  }
}

export default new UserController();

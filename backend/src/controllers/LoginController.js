import jwt from 'jsonwebtoken';
import User from '../models/User';

class LoginController {
  async store(req, res) {
    try {
      const {
        email = '', password = '',
      } = req.body;

      if (!email || !password) {
        return res.status(401).json({
          errors: ['Invalid credentials'],
        });
      }

      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(401).json({
          errors: ['User does not exist'],
        });
      }

      if (!(await user.passwordIsValid(password))) {
        return res.status(401).json({
          errors: ['Invalid password'],
        });
      }

      const { id, name } = user;
      const token = jwt.sign({ id, email, name }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });

      return res.json({ token, user: { id, email, name } });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async validate(req, res) {
    try {
      const { token } = req.body;

      if (!token) {
        return res.status(400).json({
          errors: ['Token required'],
        });
      }
      const data = jwt.verify(token, process.env.TOKEN_SECRET);
      const { id, email, name } = data;

      const user = await User.findOne({
        where: {
          id,
          email,
        },
      });

      if (!user) {
        return res.status(400).json({
          errors: ['Invalid user'],
        });
      }

      return res.json({ user: { id, email, name } });
    } catch (e) {
      return res.status(400).json({
        errors: ['Invalid or expired Token'],
      });
    }
  }
}

export default new LoginController();

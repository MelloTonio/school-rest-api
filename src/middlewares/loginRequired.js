import jwt from 'jsonwebtoken';
import User from '../models/Users';

export default async (req, res, next) => {
  const { authorization } = req.headers;
  console.log(authorization);
  if (!authorization) {
    return res.status(401).json({
      errors: ['Login Required!'],
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;

    const user = await User.findOne({
      where: {
        id, email,
      },
    });

    if (!user) {
      return res.status(401).json({
        errors: ['Invalid User'],
      });
    }

    req.userId = id;
    req.userEmail = email;

    return next();
  } catch (error) {
    return res.status(401).json({
      errors: ['Token expired or invalid!'],
    });
  }
};

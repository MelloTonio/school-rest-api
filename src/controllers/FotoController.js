import multer from 'multer';
import multerConfig from '../config/multer';
import Photo from '../models/Photos';

const upload = multer(multerConfig).single('archive');

class FotoController {
  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error],
        });
      }

      try {
        const { originalname, filename } = req.file;
        // eslint-disable-next-line camelcase
        const { aluno_id } = req.body;

        const foto = await Photo.create({ originalname, filename, aluno_id });

        return res.json(foto);
      } catch (e) {
        return res.status(400).json({
          errors: ["Student don't exist"],
        });
      }
    });
  }
}

export default new FotoController();

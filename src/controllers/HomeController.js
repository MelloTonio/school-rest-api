import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      name: 'Mellucium',
      surname: 'Java Master',
      email: 'Mellucium@gmail.com',
      idade: 26,
      weight: 300,
      height: 1.23,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();

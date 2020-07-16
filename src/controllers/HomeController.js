class HomeController {
  async index(req, res) {
    res.json('Dammit, this is the homePage!');
  }
}

export default new HomeController();

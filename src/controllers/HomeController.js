class HomeController {
  index(req, res) {
    res.json({
      AllRight: true,
    });
  }
}

export default new HomeController();

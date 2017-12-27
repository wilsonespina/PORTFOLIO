const router     = require('express').Router();
const projects  = require('../controllers/projects');

router.route('/projects')
  .get(projects.index);

router.route('/projects/:id')
  .get(projects.show);

router.all('/*', (req, res) => res.notFound());

module.exports = router;

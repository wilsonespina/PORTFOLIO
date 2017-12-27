const Project = require('../models/project');

function projectsIndex(req, res, next) {
  Project
    .find()
    .exec()
    .then(projects => res.json(projects))
    .catch(next);
}

function projectsShow(req, res, next) {
  Project
    .findById(req.params.id)
    .exec()
    .then((project) => {
      if(!project) return res.notFound();
      res.json(project);
    })
    .catch(next);
}

module.exports = {
  index: projectsIndex,
  show: projectsShow
};

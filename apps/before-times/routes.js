const routeRegex = /^\/(before-times|the-before-times|beforetimes|thebeforetimes|ld48|ludum-dare-48|ludumdare48)(?:\/.*)?$/i;

const itchioUrl = 'https://levilindsey.itch.io/the-before-times';

// Attaches the route handlers for this app.
exports.attachRoutes = (server, appPath, config) => {
  server.get(routeRegex, handleRequest);

  // ---  --- //

  // Handles a request for this app.
  function handleRequest(req, res, next) {
    // Check whether this request was directed to the portfolio.
    if (config.portfolioDomains.indexOf(req.hostname) < 0) {
      next();
      return;
    }

    const dirs = req.path.split('/');

    if (dirs[2] === '' || dirs.length === 2) {
      res.redirect(itchioUrl);
    } else {
      next();
    }
  }
};

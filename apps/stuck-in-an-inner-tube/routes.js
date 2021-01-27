const routeRegex = /^\/(stuck-in-an-inner-tube|tube-climber|ld47|ludum-dare-47)(?:\/.*)?$/;

const redirectUrl = 'https://levilindsey.github.io/tube-climber';

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
      res.redirect(redirectUrl);
    } else {
      next();
    }
  }
};
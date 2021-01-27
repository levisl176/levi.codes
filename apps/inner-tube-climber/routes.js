const routeRegex = /^\/(inner-tube-climber)(?:\/.*)?$/;

const androidRegex = /(\bandroid\b)/i;
const iosRegex = /(\bmac os\b|\bios\b|\biphone\b|\bipad\b|\bipod\b)/i;

const githubUrl = 'https://levilindsey.github.io/tube-climber';
// FIXME
const androidStoreUrl = 'https://levilindsey.github.io/tube-climber';
const iosStoreUrl = 'https://levilindsey.github.io/tube-climber';

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

      const redirectUrl = iosRegex.test(req.get('User-Agent')) ? iosStoreUrl : androidStoreUrl;
      res.vary('User-Agent');
      res.redirect(redirectUrl);
    } else {
      next();
    }
  }
};
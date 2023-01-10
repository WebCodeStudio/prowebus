const CoursesController = require("./controllers/CoursesController");
const AuthenticationController = require("./controllers/AuthenticationController");
const AutorizationController = require("./controllers/AuthorizationController");

module.exports = (app) => {
  // REGISTER, LOGIN, LOGOUT
  app.post("/api/register", AuthenticationController.register);
  app.post("/api/login", AuthenticationController.login);
  app.get("/api/logout", AuthenticationController.logout);

  // COURESES
  app.get(
    "/api/courses",
    AutorizationController.validateLogin,
    CoursesController.index
  );
  app.post(
    "/api/courses",
    AutorizationController.validateLogin,
    CoursesController.post
  );
  app.put(
    "/api/courses",
    AutorizationController.validateLogin,
    CoursesController.put
  );
  app.delete(
    "/api/courses",
    AutorizationController.validateLogin,
    CoursesController.delete
  );
};

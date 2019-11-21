import SessionsController from "./Controllers/SessionsController.js";

class App {
  sessionsController = new SessionsController();
}

window["app"] = new App();

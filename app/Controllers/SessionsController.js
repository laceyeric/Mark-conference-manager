import SessionsService from "../Services/SessionsService.js";
import store from "../store.js";
//private parts
function _drawSessions() {
  let sessionsTemplate = "";
  let sessions = store.State.sessions;
  sessions.forEach(session => {
    sessionsTemplate += session.Template;
  });
  document.querySelector("#sessions").innerHTML = sessionsTemplate;
}
export default class SessionsController {
  constructor() {
    _drawSessions();
  }
}

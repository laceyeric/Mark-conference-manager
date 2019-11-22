import Speaker from "../Models/Speaker.js";
import store from "../store.js";
import Session from "../Models/Session.js";

class SessionsService {

  addSession(newSession) {
    debugger;
    let session = new Session({
      id: '0',
      name: "TEST",
      speakers: [{ id: '', sessionId: '0', name: 'Test', topic: 'Connections', time: '3:00 PM' }]
    })
    console.log("Did we get to the Service?");

    store.State.sessions.push(session);
    store.saveState();
  }
  //NOTE this will add a speaker to a session
  addSpeaker(newSpeaker) {
    let speaker = new Speaker(newSpeaker);
    let session = store.State.sessions.find(s => s.id == speaker.sessionId);
    session.speakers.push(speaker);
    store.saveState();
  }

  removeSpeaker(sessionId, speakerId) {
    let sessionToRemoveSpeakerFrom = store.State.sessions.find(
      s => s.id == sessionId
    );
    let speakerIndex = sessionToRemoveSpeakerFrom.speakers.findIndex(
      s => s.id == speakerId
    );
    sessionToRemoveSpeakerFrom.speakers.splice(speakerIndex, 1);
    store.saveState();
  }
}

const SESSIONSERVICE = new SessionsService();

export default SESSIONSERVICE;

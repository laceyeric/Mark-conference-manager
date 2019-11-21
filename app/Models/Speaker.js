import { generateId } from "../Utils.js";

export default class Speaker {
  constructor({ id = generateId(), sessionId, name, topic, time }) {
    this.id = id;
    this.sessionId = sessionId;
    this.name = name;
    this.topic = topic;
    this.time = time;
  }
  get Template() {
    return `
    <dt>${this.name}</dt>
    <dd>${this.topic}</dd>
    <button class="btn btn-outline btn-danger" onclick="app.sessionsController.removeSpeaker('${this.sessionId}','${this.id}')">X</button>
    `;
  }
}

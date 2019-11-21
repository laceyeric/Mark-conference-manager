import { generateId } from "../Utils.js";

export default class Speaker {
  constructor({ id = generateId(), sessionId, name, topic, time }) {
    this.id = id;
    this.sessionId = sessionId;
    this.name = name;
    this.topic = topic;
    this.time = time;
  }
}
import Speaker from "./Speaker.js";
import { generateId } from "../Utils.js";

export default class Session {
  constructor({ id = generateId(), name, speakers }) {
    this.id = id;
    this.name = name;
    this.speakers = speakers.map(s => new Speaker(s));
  }
}

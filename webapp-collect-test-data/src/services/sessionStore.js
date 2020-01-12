import { observable, action, decorate } from "mobx"
import uuidv4 from "uuid/v4"

class SessionStore {
  constructor() {
    this.sessionId = uuidv4()
  }

  sessionId = ""

  startNewSession = () => {
    this.sessionId = uuidv4()
  }
}

export default decorate(SessionStore, {
  sessionId: observable,
  startNewSession: action,
})

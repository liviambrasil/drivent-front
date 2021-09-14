import api from "./api";

export default class EventApi {
  getEventInfo() {
    const teste= api.get("/event");
    console.log(teste, "eventinfo");
    return teste;
  }
}

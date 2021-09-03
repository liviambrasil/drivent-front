import AuthenticatedApi from "./AuthenticatedApi";
import api from "./api";

export default class TicketApi extends AuthenticatedApi {
  save(body) {
    return api.post("/ticket", body, {
      headers: {
        ...this.getAuthorizationHeader()
      }
    });
  }
}

import AuthenticatedApi from "./AuthenticatedApi";
import api from "./api";

export default class Ticket extends AuthenticatedApi {
  getTicket() {
    return api.get("/ticket", {
      headers: {
        ...this.getAuthorizationHeader(),
      },
    });
  }
}

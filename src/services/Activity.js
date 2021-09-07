import AuthenticatedApi from "./AuthenticatedApi";
import api from "./api";

export default class TicketApi extends AuthenticatedApi {
  getActivities() {
    console.log("aqui");
    return api.get("/activity", {
      headers: {
        ...this.getAuthorizationHeader()
      }
    });
  }
}

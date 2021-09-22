import AuthenticatedApi from "./AuthenticatedApi";
import api from "./api";

export default class ActivityApi extends AuthenticatedApi {
  getDays() {
    return api.get("/eventDays", {
      headers: {
        ...this.getAuthorizationHeader()
      }
    });
  }

  getActivities() {
    return api.get("/activity", {
      headers: {
        ...this.getAuthorizationHeader()
      }
    });
  }
}

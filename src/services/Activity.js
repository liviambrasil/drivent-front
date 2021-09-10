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

  getActivities(body) {
    return api.get("/activity", body, {
      headers: {
        ...this.getAuthorizationHeader()
      }
    });
  }

  getLocations() {
    return api.get("/locations", {
      headers: {
        ...this.getAuthorizationHeader()
      }
    });
  }
}

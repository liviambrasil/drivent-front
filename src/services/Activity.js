import AuthenticatedApi from "./AuthenticatedApi";
import api from "./api";

export default class ActivityApi extends AuthenticatedApi {
  getDays() {
    console.log("aqui");
    return api.get("/eventDays", {
      headers: {
        ...this.getAuthorizationHeader()
      }
    });
  }

  getActivities(body) {
    console.log("aqui2");
    return api.get("/activity", body, {
      headers: {
        ...this.getAuthorizationHeader()
      }
    });
  }

  getLocations() {
    console.log("aqui");
    return api.get("/locations", {
      headers: {
        ...this.getAuthorizationHeader()
      }
    });
  }
}

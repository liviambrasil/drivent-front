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

  getLocations() {
    return api.get("/locations", {
      headers: {
        ...this.getAuthorizationHeader()
      }
    });
  }

  getStartTime() {
    console.log("aqui start");
    return api.get("/startTime", {
      headers: {
        ...this.getAuthorizationHeader()
      }
    });
  }

  getEndTime() {
    console.log("aqui end");
    return api.get("/endTime", {
      headers: {
        ...this.getAuthorizationHeader()
      }
    });
  }
}

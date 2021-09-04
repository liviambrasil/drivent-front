import AuthenticatedApi from "./AuthenticatedApi";
import api from "./api";

export default class Hotel extends AuthenticatedApi {
  listAll() {
    return api.get("/hotels", {
      headers: {
        ...this.getAuthorizationHeader(),
      },
    });
  }

  listRooms(hotelId) {
    return api.get(`/hotels/${hotelId}`, {
      headers: {
        ...this.getAuthorizationHeader(),
      },
    });
  }
}

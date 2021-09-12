
import EventApi from "../services/EventApi";
import UserApi from "../services/UserApi";
import AuthApi from "../services/auth";
import CepApi from "../services/CepApi";
import EnrollmentApi from "../services/EnrollmentApi";
import HotelApi from "../services/hotelApi";
import TicketApi from "../services/ticketApi";
import ActivityApi from "../services/ActivityApi";

export default function useApi() {
  return {
    event: new EventApi(),
    user: new UserApi(),
    auth: new AuthApi(),
    cep: new CepApi(),
    enrollment: new EnrollmentApi(),
    hotel: new HotelApi(),
    activity: new ActivityApi(),
    ticket: new TicketApi(),
  };
}

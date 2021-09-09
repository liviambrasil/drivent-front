<<<<<<< HEAD
import EventApi from "../services/EventApi";
import UserApi from "../services/UserApi";
import AuthApi from "../services/auth";
import CepApi from "../services/CepApi";
import EnrollmentApi from "../services/EnrollmentApi";
import HotelApi from "../services/hotelApi";
import TicketApi from "../services/ticketApi";

export default function useApi() {
  return {
    event: new EventApi(),
    user: new UserApi(),
    auth: new AuthApi(),
    cep: new CepApi(),
    enrollment: new EnrollmentApi(),
    hotel: new HotelApi(),
    ticket: new TicketApi(),
  };
}
=======
import EventApi from "../services/EventApi";
import UserApi from "../services/UserApi";
import AuthApi from "../services/auth";
import CepApi from "../services/CepApi";
import EnrollmentApi from "../services/EnrollmentApi";

import HotelApi from "../services/hotelApi";
import TicketApi from "../services/ticketApi";


export default function useApi() {
  return {
    event: new EventApi(),
    user: new UserApi(),
    auth: new AuthApi(),
    cep: new CepApi(),
    enrollment: new EnrollmentApi(),
    hotel: new HotelApi(),
    ticket: new TicketApi(),
  };
}
>>>>>>> 610873b82c386975a5a3b8aa613d1c8302c5500a

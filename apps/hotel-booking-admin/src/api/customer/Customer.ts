import { Reservation } from "../reservation/Reservation";

export type Customer = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phoneNumber: string | null;
  phone_2: string | null;
  reservations?: Array<Reservation>;
  updatedAt: Date;
};

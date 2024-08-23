import { ReservationUpdateManyWithoutCustomersInput } from "./ReservationUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  phone_2?: string | null;
  reservations?: ReservationUpdateManyWithoutCustomersInput;
};

import { ReservationCreateNestedManyWithoutCustomersInput } from "./ReservationCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  phone_2?: string | null;
  reservations?: ReservationCreateNestedManyWithoutCustomersInput;
};

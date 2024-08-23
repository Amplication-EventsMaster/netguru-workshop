import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ReservationListRelationFilter } from "../reservation/ReservationListRelationFilter";

export type CustomerWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  phone_2?: StringNullableFilter;
  reservations?: ReservationListRelationFilter;
};

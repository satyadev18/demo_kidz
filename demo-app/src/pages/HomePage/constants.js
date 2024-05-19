import {
  requiredTextField,
  minMaxLengthValidation,
} from "../../utils/validation-schema";
import * as Yup from "yup";
export const initialValues = {
  gender: "",
  name: "",
  dob: "",
  firstaid: "",
  address: "",
  postcode: "",
  country: "",
};

export const validationSchema = Yup.object({
  gender: requiredTextField("Gender"),
  name: requiredTextField("Name"),
  dob: requiredTextField("Date of Birth"),
  address: requiredTextField("Address"),
  postcode: minMaxLengthValidation("Postcode", 6),
  country: requiredTextField("Country"),
});
export const avatarColors = [
  "#F2D0B4",
  "#F5C6A4",
  "#EFC9B6",
  "#D3996E",
  "#BC7657",
  "#9E5E47",
  "#814539",
];

export const backgroundColors = [
  "#4FC3F7",
  "#00CED1",
  "#87CEEB",
  "#A6C9E2",
  "#FF69B4",
  "#f195b5",
  "#F8BBD0",
];

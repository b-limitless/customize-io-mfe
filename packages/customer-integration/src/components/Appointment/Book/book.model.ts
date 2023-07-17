import { validString, validDigit, emailRegex } from "@regrex";


export const baseExportModel = [
  {
    name: "fullName",
    regrex: validString,
    errorMessage: "",
    type: "text ",
  },
  {
    name: "phoneNumber",
    regrex: validDigit,
    errorMessage: "",
    type: "text ",
  },
  {
    name: "emailAddress",
    regrex: emailRegex,
    errorMessage: "",
    type: "text ",
  },
];

export const bookAnAppointmentModel = [
  ...baseExportModel,
  {
    name: "date",
    regrex: validString,
    errorMessage: "",
    type: "text ",
  },
  {
    name: "time",
    regrex: validString,
    errorMessage: "",
    type: "text ",
  },
];

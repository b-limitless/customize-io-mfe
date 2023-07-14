import { colors } from "../../config/colors";

export const style: any = {
  input: {
    color: "#000",

    fontFamily: "Poppins",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    opacity: 0.5,
  },
  "& label.Mui-focused": {
    color: colors.primary,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: colors.primary,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: colors.lightGray,
    },
    "&:hover fieldset": {
      borderColor: colors.lightGray,
    },
    "&.Mui-focused fieldset": {
      borderWidth: "1px",
      borderColor: colors.primary,
    },
  },
};

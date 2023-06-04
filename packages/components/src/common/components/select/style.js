import {colors} from "@/app/config/colors";

export const style = {
  input: {
    borderRadius: "6px",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "0.5px",
    color: "rgba(0, 0, 0, 0.87)",
    padding: "16px 12px",
    fontFamily: "Figtree, sans-serif !important",
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

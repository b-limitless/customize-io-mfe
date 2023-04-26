export const style: {
    input: {
        borderRadius: string;
        fontWeight: string;
        fontSize: string;
        lineHeight: string;
        letterSpacing: string;
        color: string;
        padding: string;
        fontFamily: string;
    };
    "& label.Mui-focused": {
        color: string;
    };
    "& .MuiInput-underline:after": {
        borderBottomColor: string;
    };
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: string;
        };
        "&:hover fieldset": {
            borderColor: string;
        };
        "&.Mui-focused fieldset": {
            borderWidth: string;
            borderColor: string;
        };
    };
};

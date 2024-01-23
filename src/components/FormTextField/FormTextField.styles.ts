import {ScrollbarStyles} from "../../utils/Scrollbar.styles.ts";

const inputFontSize = {
  color: 'text.primary',
  fontWeight: 400,
  fontSize: '.9375rem',
  lineHeight: '1.25rem',
  letterSpacing: '0.15px',
};

export const FormTextFieldStyles = {
  container: {
    width: '100%',
    '&>.MuiFormLabel-filled.Mui-focused,&>.MuiOutlinedInput-root.MuiInputBase-root': {
      fontWeight: 700,
    },
    '& .MuiInputBase-input': {
      ...inputFontSize,
      '&:autofill': {
        ...inputFontSize,
      },
      '&:-webkit-autofill': {
        ...inputFontSize,
      },
      '&::placeholder': {
        fontWeight: 400,
        fontSize: '.8125rem',
        lineHeight: '1.0625rem',
        letterSpacing: '0.4px',
      },
      '&.MuiInputBase-inputMultiline': {
        p: '0 .5rem 0 0',
        ...ScrollbarStyles,
      },
    },

  },
};

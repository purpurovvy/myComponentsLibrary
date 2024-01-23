import { TextField } from '@mui/material';
import {styledWithBookerTheme} from "../../utils/styledWithBookerTheme.tsx";

export const PlainTextField = styledWithBookerTheme(TextField)(({ theme }) => ({
  '& .MuiInputBase-input': {
    color: theme.palette.text.secondary,
    fontSize: '0.8125rem',
    fontWeight: '300',
    lineHeight: '1.25rem',
    padding: '0.9375rem',
    '&:focus': {
      borderColor: theme.palette.primary.main,
    },
    '&::placeholder': {
      opacity: 1,
    },
  },
  '& .MuiInputLabel-root': {
    color: theme.palette.text.secondary,
    fontSize: '0.625rem',
    lineHeight: '0.8125rem',
    fontWeight: '700',
    transform: 'none',
    position: 'relative',
    marginBottom: '0.5rem',
  },
  '&>label.MuiFormLabel-root.MuiInputLabel-root.MuiInputLabel-formControl': {
    fontWeight: '700',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderWidth: '0.0625rem',
    borderColor: theme.palette.bookerPalette.border,
    '& > legend > span': {
      display: 'none',
    },
  },
}));

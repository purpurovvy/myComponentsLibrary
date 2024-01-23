import React, { HTMLInputTypeAttribute } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { SxProps, Theme, StandardTextFieldProps } from '@mui/material';
import { getFormTextFieldError } from './FormTextField.utils';
import { FormTextFieldStyles } from './FormTextField.styles';
import { PlainTextField } from './PlainTextField';

export interface FormTextFieldProps extends StandardTextFieldProps {
  label: string,
  name: string,
  placeholder?: string,
  isErrorTextVisible?: boolean,
  inputType?: HTMLInputTypeAttribute,
  maxLength?: number,
  sx?: SxProps<Theme>;
}

const FormTextField = ({
  label, name, inputType, isErrorTextVisible, sx, placeholder, maxLength, ...props
}: FormTextFieldProps): React.ReactElement => {
  const { control, formState: { errors } } = useFormContext();
  const isError = !!errors?.[name];

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <PlainTextField
          {...field}
          {...props}
          data-testid={`formInput-${name}`}
          label={label}
          error={isError}
          type={inputType || 'text'}
          inputProps={{ placeholder, maxLength }}
          id={name}
          InputLabelProps={{ shrink: true }}
          helperText={isErrorTextVisible && isError && getFormTextFieldError(`${errors?.[name]?.message}`)}
          sx={{ ...FormTextFieldStyles.container, ...sx }}
        />
      )}
    />
  );
};

export default FormTextField;
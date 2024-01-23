import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import {
  Checkbox, FormControlLabel, FormHelperText, Stack, SxProps, Theme,
} from '@mui/material';
import { getFormTextFieldError } from '../FormTextField/FormTextField.utils';

export interface FormCheckboxProps {
  label: React.ReactNode,
  name: string,
  isErrorTextVisible?: boolean,
  sx?: SxProps<Theme>;
}

const FormCheckbox = ({
  label, name, isErrorTextVisible, sx, ...props
}: FormCheckboxProps): React.ReactElement => {
  const { control, formState: { errors } } = useFormContext();
  const isError = !!errors?.[name];

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Stack direction="column" sx={{ '& > label': { width: 'fit-content' } }}>
          <FormControlLabel {...field} {...props} data-testid={`formCheckbox-${name}`} control={<Checkbox checked={field.value} sx={{ color: 'grey.300' }} />} label={label} />
          {isErrorTextVisible && <FormHelperText sx={{ mt: '-.5rem', visibility: isError ? 'visible' : 'hidden', color: 'error.main' }}>{getFormTextFieldError(`${errors?.[name]?.message}`)}</FormHelperText>}
        </Stack>
      )}
    />
  );
};

export default FormCheckbox;
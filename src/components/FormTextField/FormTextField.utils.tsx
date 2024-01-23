import { FormattedMessage } from 'react-intl';


export enum InputErrorTypes {
  firstNameInvalid = 'firstNameInvalid',
  lastNameInvalid = 'lastNameInvalid',
  emailInvalid = 'emailInvalid',
  phoneInvalid = 'phoneInvalid',
  fieldRequired = 'fieldRequired',
}

export const getFormTextFieldError = (key:string) => {
  switch (key) {
    case InputErrorTypes.firstNameInvalid: return <FormattedMessage defaultMessage="Please enter a valid first name." />;
    case InputErrorTypes.lastNameInvalid: return <FormattedMessage defaultMessage="Please enter a valid last name." />;
    case InputErrorTypes.emailInvalid: return <FormattedMessage defaultMessage="Please enter a valid email." />;
    case InputErrorTypes.phoneInvalid: return <FormattedMessage defaultMessage="Please enter a valid phone number." />;
    case InputErrorTypes.fieldRequired: return <FormattedMessage defaultMessage="This field is required." />;
    default: return `${key}`;
  }
};

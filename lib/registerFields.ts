import { UseFormGetValues } from 'react-hook-form';
import { RegisterFormValues } from 'components/Header/GetRegisterClient';
import { formatPhoneNumber } from 'components/RQSF/PhoneNumberLogic';


export const getRequiredFields = (
  getValues: UseFormGetValues<RegisterFormValues>,
) => [
  {
    name: 'firstname',
    type: 'text',
    placeholder: 'First Name *',
    autoComplete: 'given-name',
    rules: {
      required: 'First name is required',
      pattern: {
        value: /^[A-Za-z]{3,}$/,
        message:
          'First name must be at least 3 English letters (no digits/symbols)',
      },
    },
  },
  {
    name: 'lastname',
    type: 'text',
    placeholder: 'Last Name *',
    autoComplete: 'family-name',
    rules: {
      required: 'Last name is required',
      pattern: {
        value: /^[A-Za-z]{3,}$/,
        message:
          'Last name must be at least 3 English letters (no digits/symbols)',
      },
    },
  },
  {
    name: 'email',
    type: 'email',
    placeholder: 'Email *',
    autoComplete: 'email',
    rules: {
      required: 'Email is required',
      pattern: {
        value: /^\S+@\S+$/i,
        message: 'Invalid email',
      },
    },
  },
  {
    name: 'emailVerification',
    type: 'email',
    placeholder: 'Confirm Email *',
    autoComplete: 'email',
    rules: {
      required: 'Please verify your email address',
      validate: (value: string) =>
        value === getValues('email') || 'Confirmation email does not match',
    },
  },
  {
    name: 'password',
    type: 'password',
    placeholder: 'Password *',
    autoComplete: 'new-password',
    rules: { required: 'Password is required', minLength: 8 },
  },
  {
    name: 'passwordVerification',
    type: 'password',
    placeholder: 'Confirm Password *',
    autoComplete: 'new-password',
    rules: {
      required: 'Please verify your password',
      validate: (value: string) =>
        value === getValues('password') || 'Passwords do not match',
    },
  },
  {
    name: 'phone',
    type: 'tel',
    placeholder: 'Phone *',
    autoComplete: 'tel',
    rules: { /* …same as before… */ },
    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      (e.target.value = formatPhoneNumber(e.target.value)),
  },
];

export const optionalFields = [
  {
    name: 'jobTitle',
    type: 'text',
    placeholder: 'Job Title (Optional)',
    autoComplete: 'organization-title',
    rules: {},
  },
  {
    name: 'company',
    type: 'text',
    placeholder: 'Company (Optional)',
    autoComplete: 'organization',
    rules: {},
  },
  {
    name: 'extension',
    type: 'text',
    placeholder: 'Extension (Optional)',
    autoComplete: 'tel-extension',
    rules: {},
  },
];

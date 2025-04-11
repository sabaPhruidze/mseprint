import { formatPhoneNumber } from "components/RQSF/PhoneNumberLogic";
import { UseFormGetValues } from "react-hook-form";
import { FormData } from "types/commonTypes";

export const getRequiredFields = (getValues: UseFormGetValues<FormData>) => [
  {
    name: "firstname" as const,
    type: "text",
    placeholder: "First Name *",
    rules: {
      required: "First name is required",
      pattern: {
        value: /^[A-Za-z]{3,}$/,
        message:
          "First name must be at least 3 English letters (no digits/symbols)",
      },
    },
  },
  {
    name: "lastname" as const,
    type: "text",
    placeholder: "Last Name *",
    rules: {
      required: "Last name is required",
      pattern: {
        value: /^[A-Za-z]{3,}$/,
        message:
          "Last name must be at least 3 English letters (no digits/symbols)",
      },
    },
  },
  {
    name: "email" as const,
    type: "email",
    placeholder: "Email *",
    rules: {
      required: "Email is required",
      pattern: {
        value: /^\S+@\S+$/i,
        message: "Invalid email",
      },
    },
  },
  {
    name: "emailVerification" as const,
    type: "email",
    placeholder: "Confirm Email *",
    rules: {
      required: "Please verify your email address",
      validate: (value: string) => {
        const originalEmail = getValues("email");
        return value === originalEmail || "Confirmation email does not match";
      },
    },
  },
  {
    name: "phone" as const,
    type: "tel",
    placeholder: "Phone *",
    rules: {
      required: "Phone is required",
      validate: (value: string) => {
        const digits = value.replace(/\D/g, "");
        if (digits.length === 0) return "Phone is required";
        if (digits.length !== 10) return "Phone number must be 10 digits";
        return true;
      },
    },
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      e.target.value = formatPhoneNumber(e.target.value);
    },
  },
];

export const optionalFields = [
  {
    name: "jobTitle" as const,
    type: "text",
    placeholder: "Job Title (Optional)",
    rules: {},
  },
  {
    name: "company" as const,
    type: "text",
    placeholder: "Company (Optional)",
    rules: {},
  },
  {
    name: "extension" as const,
    type: "text",
    placeholder: "Extension (Optional)",
    rules: {},
  },
];

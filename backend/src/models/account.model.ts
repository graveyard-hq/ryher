import * as yup from "yup";

const SignInSchema = yup.object({
  body: yup.object({
    email: yup
      .string()
      .email("Must be an valid email")
      .required("Email is required")
      .defined("Email must be defined"),
    password: yup
      .string()
      .required("Password is required")
      .defined("Password must be defined"),
  }),
});

const SignUpSchema = yup.object({
  body: yup.object({
    username: yup
      .string()
      .min(6, "Username must be 6 characters long")
      .max(24, "Maximum 24 characters allowed")
      .trim()
      .required("Username is required")
      .defined("Username must be defined"),
    email: yup
      .string()
      .email("Must be an email")
      .lowercase()
      .required("Email is required")
      .defined("Email must be defined"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters long")
      .max(64, "Maximum 64 characters allowed")
      .required("Password is required")
      .defined("Password must be defined"),
  }),
});

const UpdateAccountSchema = yup.object({
  body: yup.object({
    username: yup
      .string()
      .min(6, "Username must be 6 characters long")
      .max(24, "Maximum 24 characters allowed")
      .trim(),
    email: yup.string().email("Must be an email").lowercase(),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters long")
      .max(64, "Maximum 64 characters allowed"),
  }),
});

export { SignUpSchema, SignInSchema, UpdateAccountSchema };

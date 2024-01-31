import * as yup from "yup";

export const loginSchema = yup.object({
  login: yup.string().required().min(8).max(16),
  secondname: yup.string().required(),
  name: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().required().min(8).max(16),
  confirm_password: yup.string().label('confirm password').required().oneOf([yup.ref('password'), null], 'Passwords must match')
});

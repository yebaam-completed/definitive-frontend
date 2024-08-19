import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Username is required'),
  password: Yup.string()
    .min(6, 'Minimum 6 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Password is required'),
});

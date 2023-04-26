import { Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { getAuthStore } from '../../../store/selectors/auth';
import { loginAction } from '../../../store/slices/auth';
import { AuthLoadStates, LoginUserFormData } from '../../../store/types';
import Button from '../../atoms/Button';
import InputLabel from '../../molecules/InputLabel';
import LoaderScreen from '../../molecules/LoaderScreen';
import useStyles from './styles';

const LoginForm = () => {
  const { classes } = useStyles();
  const auth = useSelector(getAuthStore);
  const dispatch = useDispatch();
  const validationForm = Yup.object({
    email: Yup.string().required('Please enter email'),
    password: Yup.string().required('Please enter password'),
  });

  const formInitialValues: LoginUserFormData = {
    email: '',
    password: '',
  };

  const handleSubmit = (form: LoginUserFormData) => {
    dispatch(loginAction(form));
  };

  return (
    <>
      <Formik
        initialValues={formInitialValues}
        validationSchema={validationForm}
        onSubmit={(values, { resetForm }): void => {
          handleSubmit(values);
          resetForm({ values: formInitialValues });
        }}
      >
        {(formik) => (
          <Form>
            <h2>Sign In</h2>
            <div className={classes.formWrapper}>
              <InputLabel
                fullwidth
                label="email"
                name="email"
                value={formik.values.email}
                type="email"
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <InputLabel
                fullwidth
                label="Password"
                name="password"
                value={formik.values.password}
                type="password"
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
              <Button type="submit" text="Sign In" />
            </div>
            <div className={classes.submitButtonWrapper} />
            <div>
              {auth.status === AuthLoadStates.ERROR && (
                <p className={classes.errorLabel}>{auth.msg}</p>
              )}
            </div>
          </Form>
        )}
      </Formik>
      {auth.status === AuthLoadStates.LOADING && <LoaderScreen />}
    </>
  );
};

export default LoginForm;

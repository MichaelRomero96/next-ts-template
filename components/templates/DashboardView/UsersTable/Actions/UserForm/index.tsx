/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
import { Form, Formik } from 'formik';
import { Dispatch, FC, SetStateAction } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { createUser, editUser } from '../../../../../../store/slices/users';
import { User, UserBase } from '../../../../../../store/types';
import Button from '../../../../../atoms/Button';
import Modal from '../../../../../atoms/Modal';
import Select from '../../../../../atoms/Select';
import InputLabel from '../../../../../molecules/InputLabel';

interface UserFormProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  edit?: boolean;
  user?: User;
}

const UserForm: FC<UserFormProps> = ({ open, setOpen, edit, user }) => {
  const dispatch = useDispatch();

  function setInitialValues(initialState: UserBase) {
    if (user && edit) {
      return {
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
        id: user.id,
      };
    }
    return initialState;
  }

  const initialValues: UserBase = setInitialValues({
    name: '',
    lastName: '',
    email: '',
    role: '',
  });

  const validationForm = Yup.object({
    name: Yup.string().required('Please enter name'),
    lastName: Yup.string().required('Please enter last name'),
    email: Yup.string().required('Please enter email'),
    role: Yup.string().required('Please enter role'),
  });

  const handleSubmit = (form: UserBase) => {
    if (edit) {
      dispatch(editUser(form as User));
      return;
    }
    dispatch(createUser(form));
  };
  return (
    <Modal open={open} setOpen={setOpen}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationForm}
        onSubmit={(values, { resetForm }): void => {
          handleSubmit(values);
          setOpen(false);
          resetForm({ values: initialValues });
        }}
      >
        {(formik) => (
          <Form>
            <div style={{ padding: 30 }}>
              <h2 style={{ textAlign: 'center', marginBottom: 20 }}>
                {edit ? 'Edit' : 'Create'} User
              </h2>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  justifyContent: 'center',
                  gridGap: 20,
                }}
              >
                <InputLabel
                  style={{ width: 300 }}
                  type="text"
                  label="Name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
                <InputLabel
                  style={{ width: 300 }}
                  type="text"
                  label="Last name"
                  name="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.lastName && Boolean(formik.errors.lastName)
                  }
                  helperText={formik.touched.lastName && formik.errors.lastName}
                />
                <InputLabel
                  style={{ width: 300 }}
                  type="email"
                  label="Email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
                <Select
                  style={{ width: 300 }}
                  label="Role"
                  name="role"
                  options={['admin', 'standard']}
                  value={formik.values.role}
                  onChange={formik.handleChange}
                  error={formik.touched.role && Boolean(formik.errors.role)}
                  helperText={formik.touched.role && formik.errors.role}
                />
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gridGap: 10,
                  marginTop: 20,
                }}
              >
                <Button type="submit" text={edit ? 'Update' : 'Create'} />
                <Button text="Cancel" onClick={() => setOpen(false)} />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default UserForm;

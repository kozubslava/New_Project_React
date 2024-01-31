import { Form, Formik, Field, ErrorMessage } from "formik"
// import React from "react";
import { loginSchema } from "../../utils/validation";
import styles from "./LoginForm.module.scss"

  const initialValues = {
    login: '',
    secondname: '',
    name: '',
    email: '',
    password: '',
    confirm_password: ""
    
  };
  
  function LoginForm(props) {
    function handleSubmit(values, actions) {
      console.log(values);
      actions.resetForm();
    }

  return(
  <Formik
  initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}>
    <Form>
      <div>
          <Field type="text" name="login" />
          <ErrorMessage name="login" component={ErrorDetail} className={styles.error} />
      </div>
      <div>
          <Field type="text" name="secondname" />
          <ErrorMessage name="secondname" component={ErrorDetail}  className={styles.error} />
      </div>
      <div>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component={ErrorDetail} className={styles.error} />
      </div>
      <div>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component={ErrorDetail} className={styles.error} />
      </div>
      <div>
          <Field type="password" name="password"  />
          <ErrorMessage
            name="password"
            component={ErrorDetail}
            className={styles.error}
          />
      </div>
      <div>
          <Field type="password" name="confirm_password"  />
          <ErrorMessage
            name="confirm_password"
            component={ErrorDetail}
            className={styles.error}
          />
      </div>

      confirm_password
      <button type="submit">Submit</button>
    </Form>
  </Formik>
  )
}

function ErrorDetail({ children, ...rest }) {
  return <div {...rest}>Error: {children}</div>;
}

export default LoginForm;
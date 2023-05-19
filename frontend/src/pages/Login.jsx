import { Formik } from "formik";
import LoginForm, { loginSchema } from "../components/";

const Login = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={loginSchema}
      onSubmit={(values, actions) => {
        login(values);
        actions.resetForm();
        actions.setSubmitting(false);
      }}
      component={(props) => <LoginForm {...props} />}
    ></Formik>
  );
};

export default Login;

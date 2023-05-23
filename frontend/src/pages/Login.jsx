import { Formik } from "formik";
import LoginForm, { loginSchema } from "../components/loginForm";
import useAuthCalls from "../hooks/useAuthCalls";

const Login = () => {
  const { login } = useAuthCalls();
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

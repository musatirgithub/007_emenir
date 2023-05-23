import { Formik } from "formik";
import RegisterForm, { registerSchema } from "../components/RegisterForm";
import useAuthCalls from "../hooks/useAuthCalls";

const Register = () => {
  const { register } = useAuthCalls();
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={registerSchema}
      onSubmit={(values, actions) => {
        register({ ...values, password2: values.password });
        actions.resetForm();
        actions.setSubmitting(false);
      }}
      component={(props) => <RegisterForm {...props} />}
    ></Formik>
  );
};

export default Register;

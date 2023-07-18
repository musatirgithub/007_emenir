import { Formik } from "formik";
import RegisterForm, { registerSchema } from "../components/RegisterForm";
import useAuthCalls from "../hooks/useAuthCalls";

const Register = () => {
  const { register } = useAuthCalls();
  return (
    <Formik
      initialValues={{
        username: "",
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password2: "",
      }}
      validationSchema={registerSchema}
      onSubmit={(values, actions) => {
        register({ ...values });
        actions.resetForm();
        actions.setSubmitting(false);
      }}
      component={(props) => <RegisterForm {...props} />}
    ></Formik>
  );
};

export default Register;

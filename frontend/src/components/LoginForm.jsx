import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Lütfen kayıt olduğunuz eposta adresini girin")
    .required("Eposta adresi girilmesi zorunludur!"),
  password: Yup.string()
    .min(8, "Şifre en az 8 karakter olmalıdır!")
    .max(16, "Şifre 16 karakteri geçemez!")
    .matches(/\d+/, "Şifre rakam içermek zorundadır!"),
  // .matches(/[a-z]+/, "Password must have a lowercase")
  // .matches(/[A-Z]+/, "Password must have an uppercase")
  // .matches(/[!,?{}><%&$#£+-.]+/, " Password must have a special char"),
});

const loginForm = ({ values, handleChange, errors, touched, handleBlur }) => {
  return (
    <Form>
      <label for="email">Eposta adresiniz</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Eposta adresinizi giriniz..."
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        helperText={touched.email && errors.email}
        error={touched.email && Boolean(errors.email)}
      />
      <label for="password">Şifreniz</label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Şifrenizi giriniz..."
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        helperText={touched.password && errors.password}
        error={touched.password && Boolean(errors.password)}
      />
      <button type="submit">Giriş</button>
    </Form>
  );
};

export default loginForm;

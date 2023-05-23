import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "../helper/styles";

export const registerSchema = Yup.object().shape({
  username: Yup.string()
    .max(10, "Kullanıcı adı 10 karakterden uzun olamaz")
    .required(),
  first_name: Yup.string()
    .max(20, "İsim 25 karakterden uzun olamaz")
    .required(),
  last_name: Yup.string()
    .max(20, "Soyisim 25 karakterden uzun olamaz")
    .required(),
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

const registerForm = ({
  values,
  handleChange,
  errors,
  touched,
  handleBlur,
}) => {
  return (
    <>
      <Form>
        <label className={styles.label} htmlFor="username">
          Kullanıcı Adı
        </label>
        <Field
          className={styles.field}
          type="text"
          name="username"
          id="username"
          placeholder="Eposta adresinizi giriniz..."
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <ErrorMessage
          component="a"
          className={styles.errorMsg}
          name="username"
        />
        <label className={styles.label} htmlFor="first_name">
          İsim
        </label>
        <Field
          className={styles.field}
          type="text"
          name="first_name"
          id="first_name"
          placeholder="İsminizi giriniz..."
          value={values.first_name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <ErrorMessage
          component="a"
          className={styles.errorMsg}
          name="first_name"
        />
        <label className={styles.label} htmlFor="last_name">
          Soyisim
        </label>
        <Field
          className={styles.field}
          type="last_name"
          name="last_name"
          id="last_name"
          placeholder="Soyisminizi giriniz..."
          value={values.last_name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <ErrorMessage component="a" className={styles.errorMsg} name="email" />
        <label className={styles.label} htmlFor="Email">
          Email
        </label>
        <Field
          className={styles.field}
          type="email"
          name="email"
          id="email"
          placeholder="Eposta adresinizi giriniz..."
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <ErrorMessage component="a" className={styles.errorMsg} name="email" />
        <label className={styles.label} htmlFor="password">
          Password
        </label>
        <Field
          className={styles.field}
          type="password"
          name="password"
          id="password"
          placeholder="Şifrenizi giriniz..."
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <ErrorMessage
          name="password"
          component="a"
          className={styles.errorMsg}
        />
        <div className="mt-8">
          <button type="submit" className={styles.button}>
            Kayıt ol
          </button>
        </div>
      </Form>
    </>
  );
};

export default registerForm;

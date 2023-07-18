import { Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "../helper/styles";
import formPage_picture from "../pics/login_register.jpg";

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
    <section className="flex justify-evenly items-center form-container">
      <div className="hidden lg:block form-img-container">
        <img src={formPage_picture} alt="form page" />
      </div>
      <Form className="w-[22rem]" autocomplete="off">
        <h1 className="text-center text-[#18181b] text-[1.5rem] font-bold">
          Giriş
        </h1>
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
        <label className={styles.label} htmlFor="Email">
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
            Giriş
          </button>
        </div>
      </Form>
    </section>
  );
};

export default loginForm;

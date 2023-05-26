import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "../helper/styles";
import * as Yup from "yup";

const ProfileForm = ({
  id,
  isim,
  soyisim,
  kimlik_no,
  phone,
  address,
  iban,
}) => {
  return (
    <Formik
      initialValues={{ isim, soyisim, kimlik_no, phone, address, iban }}
      validationSchema={Yup.object().shape({
        isim: Yup.string().max(20, "isim 25 veya daha az karakter olmalıdır"),
        soyisim: Yup.string().max(
          20,
          "soyisim 25 veya daha az karakter olmalıdır"
        ),

        kimlik_no: Yup.string()
          .matches(/^\d{11}$/, "sadece rakam girilebilir")
          .min(11, "kimlik numarası 11 haneli olmalıdır!")
          .max(11, "kimlik numarası 11 haneli olmalıdır!"),
        phone: Yup.string()
          .matches(/^\d{10}$/, "sadece rakam girilebilir")
          .min(10, "kimlik numarası 10 haneli olmalıdır!")
          .max(10, "kimlik numarası 10 haneli olmalıdır!"),
        address: Yup.string().max(
          150,
          "Sifre en fazla 16 karakter icermelidir."
        ),
        iban: Yup.string().max(26, "Sifre en fazla 16 karakter icermelidir."),
      })}
      onSubmit={(values, actions) => {
        alert(`fullName: ${values.fullName}
            email: ${values.email}
            password: ${values.password}
          `);
        actions.resetForm();
        actions.setSubmitting(false);
      }}
    >
      {({ values, handleChange, handleBlur }) => (
        <Form>
          <div>
            <label className={styles.label} htmlFor="isim">
              İsim
            </label>
            <Field
              className={styles.field}
              type="text"
              name="isim"
              id="isim"
              placeholder="Lütfen isminizi giriniz..."
              value={values.isim}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorMessage
              component="a"
              className={styles.errorMsg}
              name="isim"
            />
          </div>
          <div>
            <label className={styles.label} htmlFor="soyisim">
              Soyisim
            </label>
            <Field
              className={styles.field}
              type="text"
              name="soyisim"
              id="soyisim"
              placeholder="Lütfen soyisminizi giriniz..."
              value={values.soyisim}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorMessage
              component="a"
              className={styles.errorMsg}
              name="soyisim"
            />
          </div>
          <div>
            <label className={styles.label} htmlFor="kimlik_no">
              TC Kimlik No
            </label>
            <Field
              className={styles.field}
              type="text"
              name="kimlik_no"
              id="kimlik_no"
              placeholder="Lütfen kimlik numaranızı giriniz..."
              value={values.kimlik_no}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorMessage
              component="a"
              className={styles.errorMsg}
              name="kimlik_no"
            />
          </div>
          <div>
            <label className={styles.label} htmlFor="phone">
              Telefon numarası
            </label>
            <Field
              className={styles.field}
              type="text"
              name="phone"
              id="phone"
              placeholder="Lütfen telefonunuzu giriniz..."
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorMessage
              component="a"
              className={styles.errorMsg}
              name="phone"
            />
          </div>
          <div>
            <label className={styles.label} htmlFor="address">
              Adres
            </label>
            <Field
              className={styles.field}
              type="text"
              name="address"
              id="address"
              placeholder="Lütfen adresinizi giriniz..."
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorMessage
              component="a"
              className={styles.errorMsg}
              name="address"
            />
          </div>
          <div>
            <label className={styles.label} htmlFor="iban">
              IBAN
            </label>
            <Field
              className={styles.field}
              type="text"
              name="iban"
              id="iban"
              placeholder="Lütfen IBAN giriniz..."
              value={values.iban}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorMessage
              component="a"
              className={styles.errorMsg}
              name="iban"
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ProfileForm;

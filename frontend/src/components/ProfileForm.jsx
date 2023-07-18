import { Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "../helper/styles";
import profile_form from "../pics/profile_form.jpg";

export const profileSchema = Yup.object().shape({
  isim: Yup.string().max(20, "isim 25 veya daha az karakter olmalıdır")
  .required("Kullanıcı adı bos olamaz"),
  soyisim: Yup.string().max(20, "soyisim 25 veya daha az karakter olmalıdır"),

  kimlik_no: Yup.string()
    .min(11, "11 haneli olmalı ve rakamlardan oluşmalıdır!")
    .max(11, "11 haneli olmalı ve rakamlardan oluşmalıdır!")
    .matches(/^\d{11}$/, "11 haneli olmalı ve rakamlardan oluşmalıdır!")
    .required("Kimlik numarasi bos olamaz"),
  phone: Yup.string()
    .min(10, "10 haneli olmalı ve rakamlardan oluşmalıdır!")
    .max(10, "10 haneli olmalı ve rakamlardan oluşmalıdır!")
    .matches(/^\d{10}$/, "10 haneli olmalı ve rakamlardan oluşmalıdır!")
    .required("Telefon numarasi bos olamaz"),
  address: Yup.string().max(150, "Sifre en fazla 16 karakter icermelidir.")
  .required("Adres bos olamaz"),
  iban: Yup.string().max(26, "Sifre en fazla 16 karakter icermelidir.")
  .required("Iban bos olamaz"),
});

const ProfileForm = ({ values, handleChange, errors, touched, handleBlur }) => {
  return (
    <section className="flex justify-evenly items-center form-container">
      <div className="hidden lg:block form-img-container">
        <img src={profile_form} alt="form page" />
      </div>
      <Form className="w-[22rem]" autocomplete="off">
        <h1 className="text-center text-[#18181b] text-[1.5rem] font-bold">
          Profilim
        </h1>
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
          <ErrorMessage component="a" className={styles.errorMsg} name="isim" />
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
          <ErrorMessage component="a" className={styles.errorMsg} name="iban" />
        </div>
        <div className="mt-8">
          <button type="submit" className={styles.button}>
            Kaydet
          </button>
        </div>
      </Form>
    </section>
  );
};

export default ProfileForm;

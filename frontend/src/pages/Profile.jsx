import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Formik } from "formik";
import useApiCalls from "../hooks/useApiCalls";
import ProfileForm from "../components/ProfileForm";
import { profileSchema } from "../components/ProfileForm";

const Profile = () => {
  const { getProfile, updateProfile } = useApiCalls();
  const { profile, loading } = useSelector((state) => state.incident);
  useEffect(() => {
    getProfile();
  }, []);


  if (loading) {
    return <section className="min-h-[calc(100vh-8rem)] text-[2rem] flex justify-center items-center "><div>...Yükleniyor</div></section>;
  }
  if (!profile){
    return <section className="min-h-[calc(100vh-8rem)] text-[2rem] flex justify-center items-center "><div>...Yükleniyor</div></section>
  }

  // if (profile.id === undefined){
  //   return <div>...Loading</div>
  // }

 const {
    id,
    user,
    isim,
    soyisim,
    kimlik_no,
    phone,
    address,
    iban,
  } = profile[0];
  return (
    <Formik
    initialValues={{id, user, isim, soyisim, kimlik_no, phone, address, iban }}
      validationSchema={profileSchema}
      onSubmit={(values, actions) => {
        updateProfile({ ...values});
        actions.resetForm();
        actions.setSubmitting(false);
      }}
      component={(props) => <ProfileForm {...props} />}
    ></Formik>
  );
};

export default Profile;

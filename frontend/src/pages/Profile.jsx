import { useEffect, useState } from "react";
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
    return <div>...Loading</div>;
  }
  if (!profile){
    return <div>...Loading</div>
  }

  // if (profile.id === undefined){
  //   return <div>...Loading</div>
  // }

  console.log(profile[0])
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

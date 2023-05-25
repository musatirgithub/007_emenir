import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useApiCalls from "../hooks/useApiCalls";

const Profile = () => {
  const { getProfile } = useApiCalls();
  const { profile } = useSelector((state) => state.incident);
  //   const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getProfile();
    // setIsLoading(false);
  }, []);

  //   console.log("I'm your profile:", profile);
  if (profile == null || profile == undefined) {
    return <div>...Loading</div>;
  }
  return (
    <main>
      <p>id: {profile[0].id}</p>
      <p>isim: {profile[0].isim}</p>
      <p>soyisim:{profile[0].soyisim}</p>
      <p>kimlik_no:{profile[0].kimlik_no}</p>
      <p>telefon:{profile[0].phone}</p>
      <p>adres:{profile[0].address}</p>
      <p>IBAN:{profile[0].iban}</p>
    </main>
  );
};

export default Profile;

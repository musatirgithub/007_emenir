import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useApiCalls from "../hooks/useApiCalls";

const Profile = () => {
  const { getProfile } = useApiCalls();
  const { profile } = useSelector((state) => state.incident);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getProfile();
    setIsLoading(false);
  }, []);

  //   console.log("I'm your profile:", profile);
  if (isLoading) {
    return <div>...Loading</div>;
  }
  return (
    <main>
      {profile?.map((item, index) => {
        const { id, isim, soyisim, kimlik_no, phone, address, iban } = item;
        return (
          <div key={index}>
            <p>id: {id}</p>
            <p>isim: {isim}</p>
            <p>soyisim:{soyisim}</p>
            <p>kimlik_no:{kimlik_no}</p>
            <p>telefon:{phone}</p>
            <p>adres:{address}</p>
            <p>IBAN:{iban}</p>
          </div>
        );
      })}
    </main>
  );
};

export default Profile;

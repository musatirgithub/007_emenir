import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useApiCalls from "../hooks/useApiCalls";
import ProfileForm from "../components/ProfileForm";

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
        return (
          <div key={index}>
            <ProfileForm {...item} />
          </div>
        );
      })}
    </main>
  );
};

export default Profile;

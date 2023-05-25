import { useEffect } from "react";
import { useSelector } from "react-redux";
import useApiCalls from "../hooks/useApiCalls";

const Profile = () => {
  const { getProfile } = useApiCalls();
  const { profile } = useSelector((state) => state.incident);
  useEffect(() => {
    getProfile();
  }, []);

  console.log("I'm your profile:", profile);
  return <div>Profile</div>;
};

export default Profile;

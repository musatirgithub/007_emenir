// import { axiosWithToken } from "../service/axiosInstance";
import { useDispatch } from "react-redux";
import {
  fetchFail,
  fetchStart,
  getRecordAndMediatorSuccess,
  getProfileSuccess,
  updateProfileSuccess,
} from "../features/incidentSlice";
import useAxios from "./useAxios";
import { toastSuccessNotify, toastErrorNotify } from "../helper/ToastNotify";

const useApiCalls = () => {
  const dispatch = useDispatch();
  const { axiosWithToken } = useAxios();

  //!------------- GET CALLS ----------------
  // const getApiData = async (url) => {
  //   dispatch(fetchStart());
  //   try {
  //     const { data } = await axiosWithToken.get(`api/${url}/`);
  //     dispatch(getSuccess({ data, url }));
  //   } catch (error) {
  //     dispatch(fetchFail());
  //     console.log(error);
  //   }
  // };

  // const getRecords = () => getApiData("record");
  // const getMediator = () => getApiData("mediator");

  const getRecordAndMediator = async () => {
    dispatch(fetchStart());
    try {
      const [record, mediator] = await Promise.all([
        axiosWithToken.get("api/record/"),
        axiosWithToken.get("api/mediator/"),
      ]);

      dispatch(getRecordAndMediatorSuccess([record?.data, mediator?.data]));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const getProfile = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.get("users/profile/");
      dispatch(getProfileSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };
  //!------------- PUT CALLS ----------------
  const updateProfile = async (updateData) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.put(`users/profile/${updateData.id}/`, updateData);
      dispatch(updateProfileSuccess(data));
      getProfile();
      toastSuccessNotify("Profil güncellendi!");
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastErrorNotify("Profil güncellenemedi!");
    }
  };


  return {
    getRecordAndMediator,
    getProfile,
    updateProfile,
  };
};

export default useApiCalls;

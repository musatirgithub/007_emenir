import { useDispatch } from "react-redux";
import {
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
  fetchFail,
} from "../features/authSlice";
import { axiosPublic } from "./useAxios";
import { useNavigate } from "react-router-dom";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const useAuthCalls = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic.post("users/auth/login/", userInfo);
      dispatch(loginSuccess(data));
      toastSuccessNotify("Giriş Başarılı!");
      navigate("/records");
    } catch (err) {
      dispatch(fetchFail());
      toastErrorNotify("Giriş Yapılamadı!");
    }
  };

  const logout = async () => {
    dispatch(fetchStart());
    try {
      await axiosPublic.post("users/auth/logout/");
      dispatch(logoutSuccess());
      toastSuccessNotify("Çıkış Başarılı!");
      navigate("/");
    } catch (err) {
      dispatch(fetchFail());
      toastErrorNotify("Çıkış yapılamadı!");
    }
  };

  const register = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic.post("users/register/", userInfo);
      dispatch(registerSuccess(data));
      toastSuccessNotify("Kayıt Başarılı");
      navigate("/");
    } catch (err) {
      dispatch(fetchFail());
      toastErrorNotify("Kayıt yapılamadı!");
    }
  };

  return {
    login,
    logout,
    register,
  };
};

export default useAuthCalls;

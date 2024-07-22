/* eslint-disable no-unused-vars */
import axios from "axios";
import { useNavigate } from "react-router-dom";

const host = "http://localhost:5000/";

export const registrar = (user, navigate, setError) => {
  axios
    .post(`${host}api/users/createUser`, user)
    .then((res) => {
      if (res.status === 201) {
        navigate("/login");
      }
    })
    .catch((err) => {
      setError(err.response.data.message);
    });
};

export const login = (user, navigate, setError) => {
  axios
    .post(`${host}api/login`, user)
    .then((res) => {
      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        navigate("/home");
      }
    })
    .catch((err) => {
      setError(err.response.data.message);
    });
};

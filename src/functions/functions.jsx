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

export const getCurrentUser = (setUser) => {
  // Obtén el token del almacenamiento local
  const token = localStorage.getItem('token');

  // Configura los encabezados de la solicitud
  const config = {
    headers: {
      authorization: `Bearer ${token}` // Usa el token en el encabezado Authorization
    }
  };

  axios.get(`${host}api/users/profile`, config)
    .then((res) => {
      if (res.status === 200) {
        setUser({
          name: res.data.name,
          description: res.data.description
        })
      }
    })
    .catch((err) => {
      console.error('Error fetching user profile:', err.response ? err.response.data : err.message);
    });
};

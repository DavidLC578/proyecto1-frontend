/* eslint-disable no-unused-vars */
import axios from "axios";
import { useNavigate } from "react-router-dom";

//const host = "http://localhost:5000/";
const host = "https://5000-idx-proyecto1-backend-1726517761354.cluster-rz2e7e5f5ff7owzufqhsecxujc.cloudworkstations.dev/";
//const host = "https://d021-179-51-239-38.ngrok-free.app/";

export const prueba = () => {
  axios
    .get(`${host}api/users`, { withCredentials: true })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const prueba2 = () => {
  axios
    .post(`${host}api/users/hola`, { withCredentials: true, headers: { 'Content-Type': 'application/json' } },)
    .then((res) => {
      console.log(
        res);
    })
    .catch((err) => {
      console.log(err);
    });
}

export const registrar = async(user, navigate, setError) => {
  const res = await axios
    .post(`${host}api/users/createUser`, user, { withCredentials: true, headers: {
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    "Content-Type": "application/json"
    }})
    .then((res) => {
      if (res.status === 201) {
        navigate("/login");
      }
    })
    .catch((err) => {
      if (err.response) {
        setError(err.response.data.message);
        console.error(err.response.data.messsage)
      } else {
        setError('Error de conexión');
        console.error('Error de conexión')
      }
    });
    console.log(res)
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

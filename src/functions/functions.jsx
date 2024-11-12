/* eslint-disable no-unused-vars */
import axios from "axios";

const host = "https://3000-idx-back-1730838434321.cluster-blu4edcrfnajktuztkjzgyxzek.cloudworkstations.dev/"

export const registrar = (user, navigate, setError) => {
  axios
    .post(`${host}api/users/createUser`, user)
    .then((res) => {
      if (res.status === 201) {
        navigate("/login");
      }
      console.log(res)
    })
    .catch((err) => {
      setError(err.response.data.message);
    });
};

export const login = (user, navigate, setError) => {
  axios
    .post(`${host}api/users`, user)
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

  axios.get(`${host}api/users`, config)
    .then((res) => {
      if (res.status === 200) {
        const profileImgUrl = `${host}${res.data.profileimg}`;
        setUser({
          name: res.data.name,
          description: res.data.description,
          profileimg: profileImgUrl
        })
      }
    })
    .catch((err) => {
      console.error('Error fetching user profile:', err.response ? err.response.data : err.message);
    });
}

export const uploadProfilePic = (file) => {
  const token = localStorage.getItem('token');

  const config = {
    headers: {
      authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  };

  const formData = new FormData();
  formData.append('img', file); // Añade el archivo con el nombre esperado por el backend

  axios.post(`${host}api/users/uploadProfilePic`, formData, config)
    .then((res) => {
      window.location.reload();
      console.log('Imagen subida:', res);
    })
    .catch((err) => {
      console.error('Error al subir la imagen:', err);
    });
};

export const getUserById = (setUser, userId) => {
  axios.get(`${host}api/users/${userId}`)
    .then((res) => {
      const profileImgUrl = `${host}${res.data.profileimg}`;
      setUser({
        name: res.data.name,
        description: res.data.description,
        profileimg: profileImgUrl
      })
    })
}

export const followUser = (seguidoId) => {
  const token = localStorage.getItem('token');
  const config = {
    headers: {
      authorization: `Bearer ${token}`
    },
  };
  axios.post(`${host}api/users/follow`, seguidoId, config)
    .then((res) => {
      console.log(res.data.message)
    })
    .catch((err) => {
      console.error(err.response.data.message);
    });
}

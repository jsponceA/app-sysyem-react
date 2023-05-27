import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const useAuthLogin = () => {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "sebastian",
    password: "ponce",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleOnChangeInput = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOnSubmitForm = (e) => {
    e.preventDefault();
    sendFormLogin(user);
  };

  const sendFormLogin = (dataUser) => {
    const { username, password } = dataUser;
    if (username === "sebastian" && password === "ponce") {
      MySwal.fire({
        position: "top-end",
        icon: "success",
        title: "Bienvenido al sistema",
        showConfirmButton: false,
        timer: 1500,
      });

      navigate("/dashboard/home", { replace: true });
    } else {
      MySwal.fire({
        title: "Error!",
        text: "Los datos ingresados no son validos, intentelo nuevamente.",
        icon: "error",
        confirmButtonColor: "#3085d6",
        confirmButtonText: '<i class="bx bx-check"></i> Entendido!',
      });
    }
  };

  const toggleInputPassword = () => {
    setShowPassword(!showPassword);
  };

  return {
    user,
    handleOnChangeInput,
    handleOnSubmitForm,
    showPassword,
    toggleInputPassword,
  };
};

export default useAuthLogin;

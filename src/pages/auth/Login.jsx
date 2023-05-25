import { useNavigate } from "react-router-dom";
import FormLogin from "../../components/auth/FormLogin";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const USERNAMESTATIC = "sebastian";
const PASSWORDSTATIC = "ponce";

const Login = () => {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();

  const sendFormLogin = (dataUser) => {
    const { username, password } = dataUser;
    if (username === USERNAMESTATIC && password === PASSWORDSTATIC) {
      MySwal.fire({
        position: "top-end",
        icon: "success",
        title: "Bienvenido al sistema",
        showConfirmButton: false,
        timer: 1500,
      });

      navigate("/home");
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

  return (
    <div className="container-fluid bg-img-login vh-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-4 col-12">
          <div className="card box-shadow-card">
            <div className="card-header text-center">
              <p className="my-0 fw-bold">INICIO DE SESIÓN</p>
            </div>
            <div className="card-body">
              <p className="text-center text-secondary">
                Para ingresar al sistema digite su usuario y contraseña
              </p>
              <FormLogin sendFormLogin={sendFormLogin}></FormLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {};

export default Login;

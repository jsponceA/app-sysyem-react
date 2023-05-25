import { Link, Outlet, Navigate, NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const Layout = () => {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();

  const logout = () => {
    MySwal.fire({
      position: "top-end",
      icon: "success",
      title: "Hasta luego, vuelva pronto",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/login", { replace: true });
  };

  return (
    <main className="main-dashboard">
      <div className="d-flex flex-column p-3 text-bg-dark min-vh-100  my-sidebard">
        <a
          href="#"
          className="d-flex align-items-center justify-content-center  mb-3 mb-md-0 text-white text-decoration-none"
        >
          <span className="fs-4">APP-SISTEMA</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <NavLink
              to="home"
              className="nav-link text-white"
              aria-current="page"
            >
              <i className="bx bx-home"></i> Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="users" className="nav-link text-white">
              <i className="bx bx-group"></i> Usuarios
            </NavLink>
          </li>
          <li>
            <NavLink to="products" className="nav-link text-white">
              <i className="bx bx-package"></i> Productos
            </NavLink>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>mdo</strong>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
            <li>
              <a className="dropdown-item" href="#">
                <i className="bx bx-user"></i>
                Profile
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                <i className="bx bx-cog"></i>
                Configuraciones
              </a>
            </li>

            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  logout();
                }}
                className="dropdown-item"
                href="#"
              >
                <i className="bx bx-log-out"></i> Cerrar sesión
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="py-2 border-bottom ">
        <div className="container-fluid">
          <div className="d-flex">
            <div className="dropdown ms-auto">
              <a
                href="#"
                className="d-block link-dark text-decoration-none dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle"
                />
              </a>
              <ul className="dropdown-menu text-small">
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="bx bx-user"></i> Mi perfil
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="bx bx-cog"></i> Configuraciones
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      logout();
                    }}
                    className="dropdown-item"
                    href="#"
                  >
                    <i className="bx bx-log-out me-1"></i>
                    Cerrar sesión
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="main-content-body py-3">
        <Outlet />
      </div>
      <div className="main-content-footer align-self-end text-center border-1 border-top py-2">
        <span className="fw-bold">APP-SISTEMA</span> Todos los derechos
        reservados © <span className="fw-bold">{new Date().getFullYear()}</span>
      </div>
    </main>
  );
};

Layout.propTypes = {};

export default Layout;

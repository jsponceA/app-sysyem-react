import useAuthLogin from "../../hooks/auth/login";

const Login = () => {
  const {
    user,
    handleOnChangeInput,
    handleOnSubmitForm,
    showPassword,
    toggleInputPassword,
  } = useAuthLogin();

  return (
    <div className="container-fluid bg-img-login min-vh-100 bg-secondary-subtle">
      <div className="row d-flex justify-content-center align-items-center min-vh-100">
        <div className="col-lg-3 col-md-5 col-12">
          <div className="card box-shadow-card" style={{ minHeight: "450px" }}>
            <div className="card-header text-center">
              <p className="my-0 fw-bold">INICIO DE SESIÓN</p>
            </div>
            <div className="card-body">
              <p className="text-center text-secondary">
                Para ingresar al sistema digite su usuario y contraseña
              </p>
              <div className="text-center my-1">
                <img
                  src="/vite.svg"
                  alt="logo_img"
                  style={{ width: "130px", height: "120px" }}
                />
              </div>
              <form onSubmit={handleOnSubmitForm}>
                <div className="row gap-3">
                  <div className="col-md-12">
                    <div className="input-group">
                      <div className="input-group-text  border-secondary">
                        <i className="bx bx-user-circle bx-sm"></i>
                      </div>
                      <input
                        onChange={handleOnChangeInput}
                        value={user.username}
                        name="username"
                        type="text"
                        maxLength={255}
                        required
                        className="form-control border-secondary"
                        placeholder="Usuario"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="input-group">
                      <div
                        onClick={(e) => {
                          e.preventDefault();
                          toggleInputPassword();
                        }}
                        className="input-group-text border-secondary pointer-event"
                        style={{ cursor: "pointer" }}
                      >
                        <i
                          className={
                            showPassword
                              ? "bx bx-show bx-sm"
                              : "bx bx-low-vision bx-sm"
                          }
                        ></i>
                      </div>
                      <input
                        onChange={handleOnChangeInput}
                        value={user.password}
                        name="password"
                        type={showPassword ? "text" : "password"}
                        maxLength={255}
                        required
                        className="form-control border-secondary"
                        placeholder="*********"
                      />
                    </div>
                  </div>
                  <div className="col-md-12 text-end">
                    <a href="#" className="text-decoration-none">
                      ¿Olvidaste tu contraseña?
                    </a>
                  </div>
                  <div className="col-md-12 d-grid">
                    <button
                      type="submit"
                      className="btn btn-success bg-gradient btn-sm d-flex justify-content-center align-items-center rounded-0"
                    >
                      <i className="bx bx-log-in bx-sm"></i> INGRESAR
                    </button>
                  </div>
                  <div className="col-md-12 my-0">
                    <hr className="my-0" />
                  </div>
                  <div className="col-md-12 d-grid">
                    <a
                      href="#"
                      className="btn btn-danger bg-gradient btn-sm d-flex justify-content-center align-items-center rounded-0"
                    >
                      <i className="bx bxl-google-plus bx-sm"></i> GMAIL
                    </a>
                  </div>
                  <div className="col-md-12 d-grid">
                    <a
                      href="#"
                      className="btn btn-primary bg-gradient btn-sm d-flex justify-content-center align-items-center rounded-0"
                    >
                      <i className="bx bxl-facebook bx-sm"></i> FACEBOOK
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

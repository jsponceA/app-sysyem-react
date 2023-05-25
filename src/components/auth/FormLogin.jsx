import { useState } from "react";
import PropTypes from "prop-types";

const FormLogin = ({ sendFormLogin }) => {
  const [user, setUser] = useState({
    username: "sebastian",
    password: "ponce",
  });

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

  return (
    <form onSubmit={handleOnSubmitForm}>
      <div className="row gap-3">
        <div className="col-md-12">
          <div className="input-group">
            <div className="input-group-text border-secondary-subtle">
              <i className="bx bx-user-circle bx-sm"></i>
            </div>
            <input
              onChange={handleOnChangeInput}
              value={user.username}
              name="username"
              type="text"
              maxLength={255}
              required
              className="form-control border-secondary-subtle"
              placeholder="Usuario"
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="input-group">
            <div className="input-group-text border-secondary-subtle">
              <i className="bx bx-show bx-sm"></i>
            </div>
            <input
              onChange={handleOnChangeInput}
              value={user.password}
              name="password"
              type="password"
              maxLength={255}
              required
              className="form-control border-secondary-subtle"
              placeholder="*********"
            />
          </div>
        </div>
        <div className="col-md-12 text-center">
          <button type="submit" className="btn btn-success bg-gradient">
            <i className="bx bx-log-in bx-sm"></i> INGRESAR
          </button>
        </div>
      </div>
    </form>
  );
};

FormLogin.propTypes = {
  sendFormLogin: PropTypes.func.isRequired,
};

export default FormLogin;

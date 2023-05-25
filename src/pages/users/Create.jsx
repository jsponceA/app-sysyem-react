import { Link, useNavigate } from "react-router-dom";
import { createUsers } from "../../services/users";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Create = () => {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();

  const [user, setUser] = useState({});

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitFrom = async (e) => {
    e.preventDefault();
    await saveUser();
  };

  const saveUser = async () => {
    try {
      const response = await createUsers(user);
      MySwal.fire({
        position: "top-end",
        icon: "success",
        title: `El usuario ${response.data.email} se creo con exito`,
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("../users");
    } catch (error) {
      MySwal.fire({
        title: "Error!",
        text: "Vuelva a ingresar los datos.",
        icon: "error",
        confirmButtonColor: "#3085d6",
        confirmButtonText: '<i class="bx bx-check"></i> Entendido!',
      });

      throw new Error(error);
    } finally {
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header bg-white py-0 text-center">
              <p className="mb-0 py-1 fw-bold">
                <i className="bx bx-plus"></i> NUEVO USUARIO
              </p>
            </div>
            <div className="card-body">
              <div className="row">
                <form onSubmit={handleSubmitFrom}>
                  <div className="row row-gap-1">
                    <div className="col-md-12">
                      <Link to="../users" className="btn btn-outline-danger">
                        <i className="bx bx-arrow-back"></i> VOLVER
                      </Link>
                      <button
                        type="submit"
                        className="btn btn-success float-md-end"
                      >
                        <i className="bx bx-save"></i> GUARDAR
                      </button>
                      <hr />
                    </div>
                    <div className="col-md-6 col-12">
                      <label htmlFor="email" className="text-secondary">
                        Correo(*)
                      </label>
                      <div className="input-group">
                        <div className="input-group-text border-secondary-subtle">
                          <i className="bx bx-envelope bx-sm"></i>
                        </div>
                        <input
                          onChange={handleChangeInput}
                          id="email"
                          name="email"
                          type="email"
                          maxLength={255}
                          required
                          className="form-control border-secondary-subtle"
                          placeholder="Correo"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <label htmlFor="password" className="text-secondary">
                        Contraseña(*)
                      </label>
                      <div className="input-group">
                        <div className="input-group-text border-secondary-subtle">
                          <i className="bx bx-lock bx-sm"></i>
                        </div>
                        <input
                          onChange={handleChangeInput}
                          id="password"
                          name="password"
                          type="password"
                          maxLength={255}
                          required
                          className="form-control border-secondary-subtle"
                          placeholder="********"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <label htmlFor="first_name" className="text-secondary">
                        Contraseña(*)
                      </label>
                      <div className="input-group">
                        <div className="input-group-text border-secondary-subtle">
                          <i className="bx bx-text bx-sm"></i>
                        </div>
                        <input
                          onChange={handleChangeInput}
                          id="first_name"
                          name="first_name"
                          type="text"
                          maxLength={255}
                          required
                          className="form-control border-secondary-subtle"
                          placeholder="Nombres"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <label htmlFor="last_name" className="text-secondary">
                        Apellidos(*)
                      </label>
                      <div className="input-group">
                        <div className="input-group-text border-secondary-subtle">
                          <i className="bx bx-text bx-sm"></i>
                        </div>
                        <input
                          onChange={handleChangeInput}
                          id="last_name"
                          name="last_name"
                          type="text"
                          maxLength={255}
                          required
                          className="form-control border-secondary-subtle"
                          placeholder="Apellidos"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <label htmlFor="birthday" className="text-secondary">
                        Fecha Nacimiento(*)
                      </label>
                      <div className="input-group">
                        <div className="input-group-text border-secondary-subtle">
                          <i className="bx bx-calendar bx-sm"></i>
                        </div>
                        <input
                          onChange={handleChangeInput}
                          id="birthday"
                          name="birthday"
                          type="date"
                          required
                          className="form-control border-secondary-subtle"
                          placeholder="00/00/0000"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;

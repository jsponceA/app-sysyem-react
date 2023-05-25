import { useEffect } from "react";
import { getUsers, deleteUser } from "../../services/users";
import { useState } from "react";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Index = () => {
  const MySwal = withReactContent(Swal);
  const [users, setUsers] = useState([]);

  const getData = async () => {
    try {
      const response = await getUsers();
      setUsers(response.data);
    } catch (error) {
      throw new Error(error);
    } finally {
    }
  };

  const removeUser = async (id) => {
    try {
      MySwal.fire({
        title: "¿Esta seguro de eliminar este usuario?",
        text: "Realizada esta acción no se podra revertir!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, Eliminar!",
        cancelButtonText: "No, Cancelar",
      }).then(async (result) => {
        if (result.isConfirmed) {
          MySwal.fire(
            "Eliminado!",
            "El usuario fue eliminado con exito!",
            "success"
          );
          const response = await deleteUser(id);
          await getData();
        }
      });
    } catch (error) {
      throw new Error(error);
    } finally {
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header bg-white py-0 text-center">
              <p className="mb-0 py-1 fw-bold">
                <i className="bx bx-group"></i> LISTADO DE USUARIOS
              </p>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-12 text-end my-2">
                  <Link to="../users/create" className="btn btn-primary ">
                    <i className="bx bx-plus"></i> CREAR USUARIO
                  </Link>
                </div>
                <div className="col-md-12">
                  <div className="table-responsive">
                    <table className="table-sm table table-bordered table-hover">
                      <thead>
                        <tr className="text-center bg-primary-subtle">
                          <th>ACCIONES</th>
                          <th>ID</th>
                          <th>CORREO</th>
                          <th>CLAVE</th>
                          <th>NOMBRES Y APELLIDOS</th>
                          <th>FECHA NAC.</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map((user) => (
                          <tr key={user.id}>
                            <td className="text-center">
                              <div className="dropdown">
                                <button
                                  className="btn btn-outline-primary btn-sm dropdown-toggle"
                                  type="button"
                                  data-bs-toggle="dropdown"
                                  data-bs-config='{"popperConfig":{"strategy":"fixed"}}'
                                  aria-expanded="false"
                                >
                                  <i className="bx bx-dots-vertical-rounded"></i>{" "}
                                  Seleccione
                                </button>
                                <ul className="dropdown-menu">
                                  <li>
                                    <Link
                                      to={`../users/${user.id}/edit`}
                                      className="dropdown-item"
                                    >
                                      <i className="bx bx-edit"></i> Editar
                                    </Link>
                                  </li>
                                  <li>
                                    <button
                                      onClick={() => removeUser(user.id)}
                                      className="dropdown-item"
                                      type="button"
                                    >
                                      <i className="bx bx-trash"></i> Eliminar
                                    </button>
                                  </li>
                                </ul>
                              </div>
                            </td>
                            <td>{user.id}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td>
                              {user.first_name} {user.last_name}
                            </td>
                            <td>
                              {user.birthday &&
                                dayjs(user.birthday).format("DD/MM/YYYY")}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

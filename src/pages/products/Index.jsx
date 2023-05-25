import PropTypes from "prop-types";
const Index = (props) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header bg-white py-0 text-center">
              <p className="mb-0 py-1 fw-bold">
                <i className="bx bx-package"></i> PRODUCTOS
              </p>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                  <div className="table-responsive">
                    <table className="table-sm table table-bordered table-hover">
                      <thead>
                        <tr>
                          <th>ACCIONES</th>
                          <th>ID</th>
                          <th>NOMBRE</th>
                          <th>CORREO</th>
                          <th>CLAVE</th>
                          <th>FECHA</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>1</td>
                          <td>1</td>
                          <td>1</td>
                          <td>1</td>
                          <td>1</td>
                        </tr>
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

Index.propTypes = {};

export default Index;

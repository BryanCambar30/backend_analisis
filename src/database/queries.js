import { saveEmpresa } from "../controllers/empresas.controllers";

export const queries = {

    getAllEmpresa: `SELECT * FROM Empresas`,
    saveEmpresa: `INSERT INTO Empresas (Nombre, CIF, Director, Direccion, Telefono, Email, Estado, Contrasenia) VALUES
                    (@nombre, @cif, @director, @direccion, @telefono, @email, @estado, @contrasenia);`,
    getEmpresaById: `SELECT * FROM Empresas
                        WHERE ID_Empresa = @Id`,
    deleteEmpresaById: `DELETE FROM Empresas WHERE ID_Empresa = @Id`,
    updateEmpresaById: `UPDATE Empresas SET Nombre = @nombre, CIF = @cif, Director = @director, Direccion = @direccion, Telefono = @telefono, Email = @email, Estado = @estado, Contrasenia = @contrasenia
                            WHERE ID_Empresa = @Id`,
    getLoginEmpresa: `SELECT * FROM Empresas WHERE email = @email AND contrasenia = @contrasenia;`

};
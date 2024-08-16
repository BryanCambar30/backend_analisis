import { saveEmpresa } from "../controllers/empresas.controllers";

export const queries = {

    getAllEmpresa: `SELECT * FROM Empresas`,
    saveEmpresa: `INSERT INTO Empresas (Nombre, CIF, Director, Direccion, Telefono, Email, Estado) VALUES
                    (@nombre, @cif, @director, @direccion, @telefono, @email, @estado);`

};
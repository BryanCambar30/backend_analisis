import { saveEmpresa } from "../controllers/empresas.controllers";
import { saveEstudios, saveInfoFamilia, saveInfoLegal, saveInfoSanitaria, savePersona } from "../controllers/personas.controller";

export const queries = {

    getAllEmpresa: `SELECT * FROM Empresas`,
    saveEmpresa: `INSERT INTO Empresas (Nombre, CIF, Director, Direccion, Telefono, Email, Estado, Contrasenia) VALUES
                    (@nombre, @cif, @director, @direccion, @telefono, @email, @estado, @contrasenia);`,
    getEmpresaById: `SELECT * FROM Empresas
                        WHERE ID_Empresa = @Id`,
    deleteEmpresaById: `DELETE FROM Empresas WHERE ID_Empresa = @Id`,
<<<<<<< HEAD
    updateEmpresaById: `UPDATE Empresas SET Nombre = @nombre, CIF = @cif, Director = @director, Direccion = @direccion, Telefono = @telefono, Email = @email, Estado = @estado, Contrasenia = @contrasenia
                            WHERE ID_Empresa = @Id`,
    getLoginEmpresa: `SELECT * FROM Empresas WHERE email = @email AND contrasenia = @contrasenia;`

=======
    updateEmpresaById: `UPDATE Empresas SET Nombre = @nombre, CIF = @cif, Director = @director, Direccion = @direccion, Telefono = @telefono, Email = @email, Estado = @estado
                            WHERE ID_Empresa = @Id`,
    savePersona: 'INSERT INTO Personas (ID_Persona, Nombre, Apellido, Fecha_Nacimiento, Direccion, Telefono, Email, Pasword) VALUES (@id, @nombre, @apellido, @fecha_nacimiento, @direccion, @telefono, @email, @password);',
    Solicitantes: 'INSERT INTO Solicitantes (ID_Persona, Estado) VALUES (@id);',
    saveEstudios: 'INSERT INTO Estudios (ID_Solicitante, Tipo_Estudio, Especialidad, Calificacion_Media, Solicitantes_ID_Persona) VALUES (@solicitante_id, @tipo_estudio, @especialidad, @promedio, @solicitantes_id)',
    saveInfoFamilia: 'INSERT INTO Familiares (Solicitantes_ID_Persona, ID_Persona_Familiar, IDRelacion, Nombre, Telefono) VALUES (@solicitante_id, @id_familiar, @nombre, @telefono, @id_parentesco)',
    saveInfoLegal: 'INSERT INTO Datos_Legales (ID_Solicitante, Servicio_Militar, Relacion_Justicia, Solicitantes_ID_Persona) VALUES (@id_solicitante, @servicio_militar, @relacion_justicia, @solicitantes_id)',
    saveInfoSanitaria: 'INSERT INTO Datos_Sanitarios (ID_Persona, Informacion_Saniaria, Solicitantes_ID_Personma) VALUES (@id_persona, @info_sanitaria, @solicitantes_id)'
>>>>>>> 9b613a6eae9269bbc87e1b7a5547f02ee4db5b6b
};
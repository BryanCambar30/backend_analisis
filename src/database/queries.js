export const queries = {

    getAllEmpresa: `SELECT * FROM Empresas`,
    saveEmpresa: `INSERT INTO Empresas (Nombre, CIF, Director, Direccion, Telefono, Email, Estado, Password) VALUES
                    (@nombre, @cif, @director, @direccion, @telefono, @email, @estado, @password);`,
    getEmpresaById: `SELECT * FROM Empresas
                        WHERE ID_Empresa = @Id`,
    deleteEmpresaById: `DELETE FROM Empresas WHERE ID_Empresa = @Id`,
    updateEmpresaById: `UPDATE Empresas SET Nombre = @nombre, CIF = @cif, Director = @director, Direccion = @direccion, Telefono = @telefono, Email = @email, Estado = @estado, Password = @password
                            WHERE ID_Empresa = @Id`,
    getEmpresaByEmail: `SELECT * FROM Empresas WHERE email = @email`,

    savePuesto: `INSERT INTO Puestos_Trabajo (Tipo_Puesto, Condiciones, ID_Empresa) VALUES
                    (@tipo_puesto, @condiciones, @id_empresa)`,
    saveTipoContrato: `INSERT INTO Tipo_Contratos (IdTipoContrato, TipoContrato, SalarioPorHora, horasContrato) VALUES
                        (@id_tipo_contrato, @tipo_contrato, @salario_por_hora, @horas_contrato);`,
    saveContrato: `INSERT INTO Contratos (Sueldo, ID_Puesto, IdTipoContrato)
                    VALUES (
                        (SELECT SueldoBase 
                        FROM Tipo_Contratos 
                        WHERE Tipo_Contratos.IdTipoContrato = @id_tipo_contrato
                        ), @id_puesto, @id_tipo_contrato
                    );`,
    getContratoById: `SELECT c.Sueldo, pt.Tipo_Puesto, pt.Condiciones, tc.TipoContrato, tc.SalarioPorHora,
                        tc.horasContrato, e.Nombre AS Empresa, tr.Tipo AS Requisito, r.Requisito AS TipoRequisito FROM Contratos c
                        INNER JOIN Puestos_Trabajo pt ON c.ID_Puesto = pt.ID_Puesto
                        INNER JOIN Tipo_Contratos tc ON c.IdTipoContrato = tc.IdTipoContrato
                        INNER JOIN Empresas e ON pt.ID_Empresa = e.ID_Empresa
                        INNER JOIN TiposRequisitos tr ON pt.ID_Puesto = tr.ID_Puesto
                        INNER JOIN Requisitos r ON tr.IdRequisito = r.IdRequisito
                        WHERE c.ID_Puesto = @id_puesto AND c.IdTipoContrato = @id_tipo_contrato`,
    saveRequisito: `INSERT INTO Requisitos (IdRequisito, Requisito) VALUES
                        (@id_requisito, @requisito)`,
    saveTipoRequisito: `INSERT INTO TiposRequisitos (IDTipoRequisito, IdRequisito, ID_Puesto, Tipo) VALUES
                            (@id_tipo_requisito, @id_requisito, @id_puesto, @tipo);`,

    savePersona: 'INSERT INTO Personas (ID_Persona, Nombre, Apellido, Fecha_Nacimiento, Direccion, Telefono, Email, Pasword) VALUES (@id, @nombre, @apellido, @fecha_nacimiento, @direccion, @telefono, @email, @password);',
    Solicitantes: 'INSERT INTO Solicitantes (ID_Persona, Estado) VALUES (@id);',
    saveEstudios: 'INSERT INTO Estudios (ID_Solicitante, Tipo_Estudio, Especialidad, Calificacion_Media, Solicitantes_ID_Persona) VALUES (@solicitante_id, @tipo_estudio, @especialidad, @promedio, @solicitantes_id)',
    saveInfoFamilia: 'INSERT INTO Familiares (Solicitantes_ID_Persona, ID_Persona_Familiar, IDRelacion, Nombre, Telefono) VALUES (@solicitante_id, @id_familiar, @nombre, @telefono, @id_parentesco)',
    saveInfoLegal: 'INSERT INTO Datos_Legales (ID_Solicitante, Servicio_Militar, Relacion_Justicia, Solicitantes_ID_Persona) VALUES (@id_solicitante, @servicio_militar, @relacion_justicia, @solicitantes_id)',
    saveInfoSanitaria: 'INSERT INTO Datos_Sanitarios (ID_Persona, Informacion_Saniaria, Solicitantes_ID_Personma) VALUES (@id_persona, @info_sanitaria, @solicitantes_id)'
};
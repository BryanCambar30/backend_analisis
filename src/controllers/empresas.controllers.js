import { getConnection, sql, queries } from '../database'



export const getEmpresas = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllEmpresa);
        res.json(result.recordset);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const saveEmpresa = async (req, res) => {

    try {
        const { nombre, cif, director, direccion, telefono, email, estado } = req.body

        if (nombre == null || cif == null || director == null || direccion == null || telefono == null || email == null || estado == null) {
            return res.status(400).json({ msg: 'Bad Request.  Por favor llena todos los campos' })
        }

        const pool = await getConnection();

        await pool.request()
            .input('nombre', sql.VarChar, nombre)
            .input('cif', sql.VarChar, cif)
            .input('director', sql.VarChar, director)
            .input('direccion', sql.VarChar, direccion)
            .input('telefono', sql.VarChar, telefono)
            .input('email', sql.VarChar, email)
            .input('estado', sql.Binary, estado)
            .query(queries.saveEmpresa);

        res.json({
            nombre, cif, director, direccion, telefono, email, estado
        });

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

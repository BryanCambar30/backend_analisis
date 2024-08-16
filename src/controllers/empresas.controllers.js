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

export const getEmpresaById = async (req, res) => {
    const { id } = req.params

    const pool = await getConnection()

    const result = await pool.request()
        .input('Id', id)
        .query(queries.getEmpresaById)

    res.json(result.recordset[0])
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
            .input('estado', sql.Bit, estado)
            .query(queries.saveEmpresa);

        res.json({
            nombre, cif, director, direccion, telefono, email, estado
        });

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

export const updateEmpresaById = async (req, res) => {

    const { nombre, cif, director, direccion, telefono, email, estado } = req.body

    const { id } = req.params

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
        .input('estado', sql.Bit, estado)
        .input('Id', sql.Int, id)
        .query(queries.updateEmpresaById);

    res.json({
        nombre, cif, director, direccion, telefono, email, estado
    });
}

export const deleteEmpresaById = async (req, res) => {
    const { id } = req.params

    const pool = await getConnection()

    const result = await pool.request()
        .input('Id', id)
        .query(queries.deleteEmpresaById)

    res.send(result)
};




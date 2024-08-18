import { getConnection, sql, queries } from '../database'

export const savePuestoTrabajo = async (req, res) => {

    try {
        const { tipo_puesto, condiciones, id_empresa } = req.body

        if (!tipo_puesto || !condiciones || !id_empresa) {
            return res.status(400).json({ msg: 'Bad Request.  Por favor llena todos los campos' })
        }

        const pool = await getConnection();

        await pool.request()
            .input('tipo_puesto', sql.VarChar, tipo_puesto)
            .input('condiciones', sql.VarChar, condiciones)
            .input('id_empresa', sql.Int, id_empresa)
            .query(queries.savePuesto);

        res.json({
            tipo_puesto, condiciones, id_empresa
        });

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


export const saveTipoContrato = async (req, res) => {

    try {
        const { id_tipo_contrato, tipo_contrato, salario_por_hora, horas_contrato } = req.body

        if (!id_tipo_contrato || !tipo_contrato || !salario_por_hora || !horas_contrato) {
            return res.status(400).json({ msg: 'Bad Request.  Por favor llena todos los campos' })
        }

        const pool = await getConnection();

        await pool.request()
            .input('id_tipo_contrato', sql.Int, id_tipo_contrato)
            .input('tipo_contrato', sql.VarChar, tipo_contrato)
            .input('salario_por_hora', sql.Float, salario_por_hora)
            .input('horas_contrato', sql.Int, horas_contrato)
            .query(queries.saveTipoContrato);

        res.json({
            id_tipo_contrato, tipo_contrato, salario_por_hora, horas_contrato
        });

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const saveContrato = async (req, res) => {

    try {
        const { id_puesto, id_tipo_contrato } = req.body

        if (!id_puesto || !id_tipo_contrato) {
            return res.status(400).json({ msg: 'Bad Request.  Por favor llena todos los campos' })
        }

        const pool = await getConnection();

        await pool.request()
            .input('id_puesto', sql.Int, id_puesto)
            .input('id_tipo_contrato', sql.Int, id_tipo_contrato)
            .query(queries.saveContrato);

        res.json({
            id_puesto, id_tipo_contrato
        });

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const saveRequisito = async (req, res) => {

    try {
        const { id_requisito, requisito } = req.body

        if (!id_requisito || !requisito) {
            return res.status(400).json({ msg: 'Bad Request.  Por favor llena todos los campos' })
        }

        const pool = await getConnection();

        await pool.request()
            .input('id_requisito', sql.Int, id_requisito)
            .input('requisito', sql.VarChar, requisito)
            .query(queries.saveRequisito);

        res.json({
            id_requisito, requisito
        });

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const saveTipoRequisito = async (req, res) => {

    try {
        const { id_tipo_requisito, id_requisito, id_puesto, tipo } = req.body

        if (!id_tipo_requisito || !id_requisito || !id_puesto || !tipo) {
            return res.status(400).json({ msg: 'Bad Request.  Por favor llena todos los campos' })
        }

        const pool = await getConnection();

        await pool.request()
            .input('id_tipo_requisito', sql.Int, id_tipo_requisito)
            .input('id_requisito', sql.Int, id_requisito)
            .input('id_puesto', sql.Int, id_puesto)
            .input('tipo', sql.VarChar, tipo)
            .query(queries.saveTipoRequisito);

        res.json({
            id_tipo_requisito, id_requisito, id_puesto, tipo
        });


    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getContratoById = async (req, res) => {

    const { id_puesto, id_tipo_contrato } = req.body

    const pool = await getConnection()

    const result = await pool.request()
        .input('id_puesto', sql.Int, id_puesto)
        .input('id_tipo_contrato', sql.Int, id_tipo_contrato)
        .query(queries.getContratoById)

    res.json(result.recordset[0])
};
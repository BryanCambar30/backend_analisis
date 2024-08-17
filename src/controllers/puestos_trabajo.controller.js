import { getConnection, sql, queries } from '../database'

export const savePuestoTrabajo = async (req, res) => {

    try {
        const { tipo_puesto, condiciones, id_empresa } = req.body

        if (tipo_puesto == null || condiciones == null || id_empresa == null) {
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

        if (id_tipo_contrato == null || tipo_contrato == null || salario_por_hora == null || horas_contrato == null) {
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
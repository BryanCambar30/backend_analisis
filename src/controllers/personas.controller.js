import { getConnection, sql, queries } from '../database';
import bcrypt from 'bcrypt';

export const savePersona = async (req, res) => {
    try {
        const { id, nombre, apellido, fecha_nacimiento, direccion, telefono, email, password} = req.body;

        // Validación básica
        if (!id || !nombre || !apellido || !fecha_nacimiento || !direccion || !telefono || !email || !password) {
            return res.status(400).json({ msg: 'Bad Request. Por favor llena todos los campos' });
        }

        // Encriptar la contraseña
        const saltRounds = 10; // Número de rondas de encriptación
        const hashedPassword = await bcrypt.hash(contrasenia, saltRounds);

        const pool = await getConnection();

        await pool.request()
            .input('id', sql.Int, id)
            .input('nombre', sql.VarChar, nombre)
            .input('apellido', sql.VarChar, apellido)
            .input('fecha_nacimiento', sql.Date, fecha_nacimiento)
            .input('direccion', sql.VarChar, direccion)
            .input('telefono', sql.VarChar, telefono)
            .input('email', sql.VarChar, email)
            .input('password', sql.VarChar, hashedPassword) //la contrasenia ya encriptada es la que mando a guardar a la ddbb
            .query(queries.savePersona);

        res.status(201).json({ id, nombre, apellido, fecha_nacimiento, direccion, telefono, email });

    } catch (error) {
        console.error('Error saving persona:', error);
        res.status(500).json({ error: 'Internal Server Error', message: 'Error al guardar la persona.' });
    }
};


export const saveInfoFamilia = async (req, res) => {
    try {
        const { solicitante_id, id_familiar, nombre, telefono, id_parentesco } = req.body;

        if (!solicitante_id || !id_familiar || !nombre || !telefono || !id_parentesco) {
            return res.status(400).json({ msg: 'Bad Request. Por favor llena todos los campos' });
        }

        const pool = await getConnection();

        await pool.request()
            .input("solicitante_id", sql.Int, solicitante_id)
            .input("id_familiar", sql.Int, id_familiar)
            .input("nombre", sql.VarChar, nombre)
            .input("telefono", sql.VarChar, telefono)
            .input("id_parentesco", sql.Int, id_parentesco)
            .query(queries.saveFamilia);

        res.status(201).json({ solicitante_id, id_familiar, nombre, telefono, id_parentesco });

    } catch (error) {
        console.error('Error saving persona familiar:', error);
        res.status(500).json({ error: 'Internal Server Error', message: 'Error al guardar la información del familiar' });
    }
}

export const saveEstudios = async (req, res) => {
    try {
        const { solicitante_id, tipo_estudio, especialidad, promedio, solicitantes_id } = req.body;

        if (!solicitante_id || !solicitantes_id) {
            return res.status(400).json({ msg: 'Bad Request. Por favor llena todos los campos' });
        }

        const pool = await getConnection();

        await pool.request()
            .input("solicitante_id", sql.Int, solicitante_id)
            .input("tipo_estudio", sql.VarChar, tipo_estudio)
            .input("especialidad", sql.VarChar, especialidad)
            .input("promedio", sql.Decimal, promedio)
            .input("solicitantes_id", sql.Int, solicitantes_id)
            .query(queries.saveEstudios);

        res.status(201).json({ solicitante_id, tipo_estudio, especialidad, promedio, solicitantes_id });

    } catch (error) {
        console.error('Error saving educación persona:', error);
        res.status(500).json({ error: 'Internal Server Error', message: 'Error al guardar la información educativa' });
    }
}

export const saveInfoLegal = async (req, res) => {
    try {
        const { id_solicitante, servicio_militar, relacion_justicia, solicitantes_id } = req.body;

        if (!id_solicitante || !solicitantes_id) {
            return res.status(400).json({ msg: 'Bad Request. Por favor llena todos los campos' });
        }

        const pool = await getConnection();

        await pool.request()
            .input("id_solicitante", sql.Int, id_solicitante)
            .input("servicio_militar", sql.VarChar, servicio_militar)
            .input("relacion_justicia", sql.VarChar, relacion_justicia)
            .input("solicitantes_id", sql.Int, solicitantes_id)
            .query(queries.saveEstudios);

        res.status(201).json({ id_solicitante, servicio_militar, relacion_justicia, solicitantes_id });

    } catch (error) {
        console.error('Error saving informacion legal:', error);
        res.status(500).json({ error: 'Internal Server Error', message: 'Error al guardar la información legal de persona' });
    }
}

export const saveInfoSanitaria = async (req, res) => {
    try {
        const { id_persona, info_sanitaria, solicitantes_id } = req.body;

        if (!id_persona || !solicitantes_id) {
            return res.status(400).json({ msg: 'Bad Request. Por favor llena todos los campos' });
        }

        const pool = await getConnection();

        await pool.request()
            .input("id_persona", sql.Int, id_persona)
            .input("infor_sanitaria", sql.VarChar, info_sanitaria)
            .input("solicitantes_id", sql.Int, solicitantes_id)
            .query(queries.saveEstudios);

        res.status(201).json({ id_persona, info_sanitaria, solicitantes_id });

    } catch (error) {
        console.error('Error saving informacion legal:', error);
        res.status(500).json({ error: 'Internal Server Error', message: 'Error al guardar la información legal de persona' });
    }
}
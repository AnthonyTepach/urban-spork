import pool from '@/lib/mysql';

const getCarteras = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM carteras');
    res.status(200).json(rows);
  } catch (error) {
    console.error(`Error al obtener las carteras: ${error}`);
    res.status(500).json({ error: 'Ocurrió un error al obtener las carteras.' });
  } finally {
   pool.close();
  }
};



export default getCarteras;

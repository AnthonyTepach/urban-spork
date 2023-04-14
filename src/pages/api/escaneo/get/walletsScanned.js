import pool from "@/lib/mysql";
const walletsScanned = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT COUNT() AS carteras_completas_escaneadas FROM (SELECT id_cartera FROM Boletos GROUP BY id_cartera HAVING COUNT() = (SELECT COUNT() FROM Boletos b2 WHERE b2.id_cartera = Boletos.id_cartera)) AS carteras_completas WHERE id_cartera IN (SELECT id_cartera FROM Registros_Escaneo GROUP BY id_cartera HAVING COUNT() = (SELECT COUNT(*) FROM Boletos b3 WHERE b3.id_cartera = Registros_Escaneo.id_cartera));;"
    );
    res.status(200).json(rows);
  } catch (error) {
    console.error(`Error al obtener las carteras: ${error}`);
    res
      .status(500)
      .json({ error: "Ocurrió un error al obtener los promedios." });
  }
};

export default walletsScanned;

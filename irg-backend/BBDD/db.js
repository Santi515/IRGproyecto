const mysql = require('mysql2/promise'); // Usa mysql2 con promesas

const pool = mysql.createPool({
  host: 'localhost',
  port: 3306, 
  user: 'root',              // Cambia si usas otro usuario
  password: '',              // O pon tu contraseña si tienes una
  database: 'cataoculta',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log("Conexión exitosa a MySQL");
    connection.release(); // Libera la conexión despuésn de usarla
  } catch (err) {
    console.error("Error al conectar con MySQL:", err.message);
    console.error("Detalles del error:", err); // Loguear todo el objeto del error
  }
}

testConnection();
module.exports = pool;


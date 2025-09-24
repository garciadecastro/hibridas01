// migracion_years.js
import { MongoClient } from "mongodb";

// ⚠️ Cambiá el string de conexión por el tuyo
const client = new MongoClient("mongodb+srv://admin:admin@hibridas.3sxrdj2.mongodb.net/");
const db = client.db("DWT4AV");

async function convertirYears() {
  try {
    await client.connect();

    const juegos = db.collection("juegos");

    // Buscar todos los documentos
    const cursor = juegos.find();

    let total = 0;

    while (await cursor.hasNext()) {
      const j = await cursor.next();

      // Si year existe y es string, lo convertimos a Number
      if (j.year && typeof j.year === "string") {
        const yearNum = Number(j.year);

        // Solo actualizamos si la conversión da un número válido
        if (!isNaN(yearNum)) {
          await juegos.updateOne(
            { _id: j._id },
            { $set: { year: yearNum } }
          );
          total++;
          console.log(`✅ Convertido ${j.nombre} → year: ${yearNum}`);
        } else {
          console.log(`⚠️ Saltado ${j.nombre}, year no es numérico (${j.year})`);
        }
      }
    }

    console.log(`\n🎯 Migración completada. Years convertidos: ${total}`);

  } catch (err) {
    console.error("❌ Error en la migración:", err);
  } finally {
    await client.close();
  }
}

convertirYears();

import { MongoClient } from "mongodb";

const uri = "mongodb+srv://admin:admin@hibridas.3sxrdj2.mongodb.net/";

const client = new MongoClient(uri);

async function migrar() {
  try {
    await client.connect();

    const dbOrigen = client.db("DWT4AV");
    const dbDestino = client.db("AH20232CP1");

    const juegosOrigen = dbOrigen.collection("juegos");
    const juegosDestino = dbDestino.collection("juegos");

    // Leer todos los juegos de la BD vieja
    const docs = await juegosOrigen.find().toArray();

    if (docs.length === 0) {
      console.log("⚠️ No se encontraron documentos en DWT4AV.juegos");
      return;
    }

    // Insertarlos en la colección nueva
    const result = await juegosDestino.insertMany(docs);
    console.log(`✅ ${result.insertedCount} documentos copiados a AH20232CP1.juegos`);
  } catch (err) {
    console.error("❌ Error migrando datos:", err);
  } finally {
    await client.close();
  }
}

migrar();

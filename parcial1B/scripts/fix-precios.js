import { MongoClient, ObjectId } from "mongodb";

// ⚡ Ajustá tu conexión
const client = new MongoClient("mongodb+srv://admin:admin@hibridas.3sxrdj2.mongodb.net/");
const db = client.db("DWT4AV");   // 👈 tu base

async function fixPrecios() {
  try {
    await client.connect();

    const juegos = await db.collection("juegos").find().toArray();

    for (const j of juegos) {
      // Solo si es string lo convierto
      if (typeof j.precio === "string") {
        const nuevoPrecio = Number(j.precio);
        await db.collection("juegos").updateOne(
          { _id: new ObjectId(j._id) },
          { $set: { precio: nuevoPrecio } }
        );
        console.log(`✅ Actualizado ${j.nombre}: ${j.precio} → ${nuevoPrecio}`);
      }
    }

    console.log("🎉 Todos los precios fueron corregidos a tipo Number.");
  } catch (err) {
    console.error("❌ Error corrigiendo precios:", err);
  } finally {
    await client.close();
  }
}

fixPrecios();

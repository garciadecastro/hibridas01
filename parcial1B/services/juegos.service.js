import { MongoClient, ObjectId } from "mongodb";

// Conexión a Mongo Atlas
const client = new MongoClient("mongodb+srv://admin:admin@hibridas.3sxrdj2.mongodb.net/");
const db = client.db("DWT4AV");

// Obtener juegos con filtros dinámicos
export async function getJuegos(filter = {}) {
  await client.connect();

  const filterMongo = { eliminado: { $ne: true } };

  if (filter.categoria !== undefined) {
    filterMongo.categoria = { $eq: filter.categoria };
  }

  if (filter.nombre !== undefined) {
    filterMongo.nombre = { $regex: filter.nombre, $options: "i" };
  }

  if (filter.editorial !== undefined) {
    filterMongo.editorial = { $eq: filter.editorial };
  }

  if (filter.precioMax !== undefined) {
    filterMongo.precio = { $lte: Number(filter.precioMax) };
  }

  return db.collection("juegos").find(filterMongo).toArray();
}

// Traer todos los juegos, incluso eliminados
export async function getAllJuegos() {
  await client.connect();
  return db.collection("juegos").find().toArray();
}

// Obtener un juego por su ID
export async function getJuegoById(id) {
  await client.connect();
  return db.collection("juegos").findOne({ _id: new ObjectId(id) });
}

// Guardar un nuevo juego
export async function guardarJuego(juego) {
  await client.connect();
  const result = await db.collection("juegos").insertOne(juego);
  return { _id: result.insertedId, ...juego };
}

// Editar un juego (reemplazo completo de campos)
export async function editarJuego(juego) {
  await client.connect();
  const { _id, ...campos } = juego;
  await db.collection("juegos").updateOne(
    { _id: new ObjectId(_id) },
    { $set: campos }
  );
  return juego;
}

// Actualizar parcialmente un juego
export async function actualizarJuego(juego) {
  await client.connect();
  const { _id, ...campos } = juego;
  await db.collection("juegos").updateOne(
    { _id: new ObjectId(_id) },
    { $set: campos }
  );
  return juego;
}

// Marcar un juego como eliminado
export async function borrarJuego(id) {
  await client.connect();
  return db.collection("juegos").updateOne(
    { _id: new ObjectId(id) },
    { $set: { eliminado: true } }
  );
}


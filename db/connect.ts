import mysql, { type Connection } from "mysql2/promise"
import dotenv from "dotenv"
import express from "express"
import cors from "cors"

dotenv.config();

const app = express()
app.use(cors())
app.use(express.json())

function getRequiredEnv(name: string): string {
  const value = process.env[name]
  if (!value) {
    throw new Error(`Brak wymaganej zmiennej środowiskowej: ${name}`)
  }
  return value
}

let db: Connection | null = null

async function startBackend() {
  db = await mysql.createConnection({
    host: getRequiredEnv('DB_HOST'),
    user: getRequiredEnv('DB_USER'),
    password: process.env.DB_PASSWORD ?? '',
    database: getRequiredEnv('DB_NAME')
  })

  app.post('/db/dodaj/', async (req, res) => {
    const { nazwaKat, poziomDostepu } = req.body
    if (!db) {
      return res.status(500).json({ success: false, error: 'Brak połączenia z bazą' })
    }

    await db.query('INSERT INTO kategorie(nazwa_kategorii, poziom_dostepu) VALUES(?, ?)', [nazwaKat, poziomDostepu])
    res.json({ success: true })
  })

  app.get(['/db/selectKat', '/db/selectKat/'], async (req, res) => {
    console.log('Backend: otrzymano GET /db/selectKat')
    try {
      if (!db) {
        throw new Error('Brak połączenia z bazą')
      }
      const [rows] = await db.query('SELECT id_kategorii, nazwa_kategorii FROM kategorie')
      res.json({ success: true, data: rows })
    } catch (err: unknown) {
      console.error('BŁĄD SQL:', err)
      res.status(500).json({ success: false, error: err instanceof Error ? err.message : String(err) })
    }
  })

  app.listen(3001, () => console.log("backend działa poprawnie na porcie 3001"))
}

startBackend().catch((err) => {
  console.error("Nie udało się uruchomić backendu:", err)
  process.exit(1)
})


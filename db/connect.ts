import mysql from "mysql2/promise"
import dotenv from "dotenv"
import express from "express"
import cors from "cors"

dotenv.config();

const app = express()
app.use(cors())
app.use(express.json())

const db = await mysql.createConnection({
host: process.env.DB_HOST,
user: process.env.DB_USER,
password: process.env.DB_PASSWORD,
database: process.env.DB_NAME
});    


app.post('/db/dodaj/', async(req, res) =>{
    
    const {nazwaKat, poziomDostepu} = req.body;
    await db.query('INSERT INTO kategorie(nazwa_kategorii, poziom_dostepu) VALUES(?, ?)', [nazwaKat, poziomDostepu])
    res.json({success: true})
})
app.post('/db/selectKat', async(req, res) =>{
    try{
        const [rows] = await db.query('SELECT id_kategorii, nazwa_kategorii from kategorie')
        res.json({success : true, data : rows})        
    }
    catch (err : unknown ) {
        console.error('BŁĄD SQL:', err)
        res.status(500).json({ success: false, error: err instanceof Error ? err.message : String(err)})
  }
})

app.listen(3001, () => console.log("backend działa poprawnie"))


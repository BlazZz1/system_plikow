import mysql from "mysql2/promise"
import dotenv from "dotenv"
import express from "express"
import cors from "cors"

dotenv.config();

const app = express()
app.use(cors())
app.use(express.json())

app.post('/db/dodaj/', async(req, res) =>{
    
    const db = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
    });

    const {link, nazwa} = req.body;
    await db.query('INSERT INTO pliki(link, nazwa_pliku) VALUES(?, ?)')
    await db.end()
    
    res.json({success: true})
})
app.listen(3001)


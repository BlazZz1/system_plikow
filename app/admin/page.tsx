"use client";
import "./style.css"
import { useState } from "react";
import mysql from "mysql2/promise";
import dotenv from "dotenv"

export default function mainPage()
{
    const [kategorie, setKategorie] = useState<string[]>([]);
    function dodajKategorie()
    {
        const nowaKategoria = "kategoria" + (kategorie.length + 1);
        setKategorie([...kategorie, nowaKategoria]);
    }
    async function dodajDoPliku()
    {
        dotenv.config();

        const db = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
        });
        
    }   

    return(
        <div id="container">
            <header>
                <h1>KATEGORIE</h1>
            </header>

            <main>
                {/* {
                kategorie.map((kat, i) => (
                    <div id="plusKat" key={i}>{kat}</div>
                ))                       
                } */}
                <div id="plusKat">
                    Podaj nazwę kategorii
                    <br />
                    <input type="text" />
                    <br />
                    <button id="przyciskKategorie" onClick={() => {dodajKategorie()}}>Dodaj Kategorie</button>
                </div>               
            </main>
        </div>
    )
}
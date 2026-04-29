"use client";
import "./style.css"
import { useState } from "react";

export default function mainPage()
{
    const [kategorie, setKategorie] = useState<string[]>([]);
    function dodajKategorie()
    {
        const nowaKategoria = "kategoria" + (kategorie.length + 1);
        setKategorie([...kategorie, nowaKategoria]);
    }

    return(
        <div>
            <header>
                <h1>KATEGORIE</h1>
                <button id="przyciskKategorie" onClick={() => {dodajKategorie()}}>Dodaj Kategorie</button>
            </header>

            <main>
            {
                kategorie.map((kat, i) => (
                    <div key={i}>{kat}</div>
                ))
            }
            </main>
        </div>
    )
}
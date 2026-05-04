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
    // function dodajDoPliku()
    // {
        
    // }   

    return(
        <div id="container">
            <header>
                <h1>KATEGORIE</h1>
            </header>

            <main>
                {
                kategorie.map((kat, i) => (
                    <div id="plusKat" key={i}>{kat}</div>
                ))                       
                }
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
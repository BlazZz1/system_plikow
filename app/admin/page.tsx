"use client";
import "./style.css"
import { useRef, useState } from "react";

export default function mainPage()
{
    const nazwaKatRef = useRef<HTMLInputElement>(null);
    const poziomDostepuRef = useRef<HTMLInputElement>(null);
    
    const [kategorie, setKategorie] = useState<string[]>([])

    async function dodajKategorie()
    {
        const nazwaKat = nazwaKatRef.current?.value ?? "";
        const dostepKat = nazwaKatRef.current?.value ?? "";
        if(!nazwaKat && !dostepKat) return; 
        
        await fetch('http://localhost:3001/db/dodaj/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({nazwaKat: nazwaKat, poziomDostepu: dostepKat})
        })
        setKategorie([...kategorie, nazwaKat])
    }
    
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
                    <input type="text" ref={nazwaKatRef}/>
                    <br />
                    Podaj poziom dostępu 1, 2, 3
                    <br />
                    <input type="number" ref={poziomDostepuRef}/>
                    <br />
                    <button id="przyciskKategorie" onClick={() => {dodajKategorie()}}>Dodaj Kategorie</button>
                </div>
             
            </main>
        </div>
    )
}
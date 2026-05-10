"use client";
import "./style.css"
import { useRef, useState } from "react";

export default function mainPage()
{
    const [kategorie, setKategorie] = useState<string[]>([]);
    const nazwaKatRef = useRef<HTMLInputElement>(null);
    
    

    function dodajKategorie()
    {
        const nazwaKat = nazwaKatRef.current?.value ?? "";
        if(!nazwaKat) return; 
        setKategorie([...kategorie, nazwaKat]);
        nazwaKatRef.current!.value = "";
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
                    <button id="przyciskKategorie" onClick={() => {dodajKategorie()}}>Dodaj Kategorie</button>
                </div>
             
            </main>
        </div>
    )
}
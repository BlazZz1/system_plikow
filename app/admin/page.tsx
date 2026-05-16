"use client"
import { json } from "stream/consumers"
import "./style.css"
import {useRef, useState } from "react"
import WyswietlKategorie from "./show"

export default function mainPage()
{
    const nazwaKatRef = useRef<HTMLInputElement>(null)
    const poziomDostepuRef = useRef<HTMLInputElement>(null)
    const dynamicURL : string = ""

    async function dodajKategorie()
    {
        const nazwaKat = nazwaKatRef.current?.value ?? ""
        const dostepKat = poziomDostepuRef.current?.value ?? ""
        if(!nazwaKat && !dostepKat) return
        
        await fetch('http://localhost:3001/db/dodaj/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({nazwaKat: nazwaKat, poziomDostepu: dostepKat})
        })
    }


    return(
        <div id="container">
            <header>
                <h1>KATEGORIE</h1>
            </header>

            <main>    
                {
                    <WyswietlKategorie></WyswietlKategorie>
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
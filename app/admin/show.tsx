"use client"
import { useEffect, useState } from "react";

type Kategoria = {
    id_kategori : number, 
    nazwa_kategorii : string,
    poziom_dostepu : number
} 

export default function WyswietlKategorie(){
   
    const [kategorie, setKategorie] = useState<Kategoria[]>([])

    useEffect(() => {
        fetch('http://localhost:3001/db/selectKat',
        {
            method: 'POST' 
        })
        .then((res) => res.json()) 
        .then((result) => {        
            if (result.success) {
                setKategorie(result.data);
            }
            else{
                console.log("Błąd pobierania danych")
            }
        })
    }, [])
    return(
        kategorie.map((kat) => (
            <div id="plusKat" key={kat.id_kategori}>
                {kat.nazwa_kategorii}
            </div>
        ))
    )
}


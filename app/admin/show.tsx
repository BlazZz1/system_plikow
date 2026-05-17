"use client"
import { useEffect, useState } from "react";

type Kategoria = {
    id_kategorii : number, 
    nazwa_kategorii : string,
    poziom_dostepu : number
} 

export default function WyswietlKategorie(){
   
    const [kategorie, setKategorie] = useState<Kategoria[]>([])

    async function pobierzKategorie() {

    try {

        console.log("start fetch")

        const res = await fetch('http://localhost:3001/db/selectKat')

        console.log("status:", res.status)

        const result = await res.json()

        console.log(result)

        if(result.success) {
            setKategorie(result.data)
        }

    } catch(err) {

        console.error("FETCH ERROR:", err)
    }
}
    useEffect(() => {
       pobierzKategorie() 
    }, [])

    return(
        <>
            {kategorie.length === 0 ? (
                <div id="plusKat">Brak kategorii</div>
            ) : (
                kategorie.map((kat) => (
                    <div id="plusKat" key={kat.id_kategorii}>
                        {kat.nazwa_kategorii}
                    </div>
                ))
            )}
        </>
    )
}


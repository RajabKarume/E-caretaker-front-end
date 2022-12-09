import ApartmentCard from "./ApartmentCards";
import { useState } from "react";

export default function Apartments({apartment, handleClick}){
    // const[apartment, setApartment] = useState([])

    // useEffect(()=>{
    //     fetch('http://127.0.0.1:3000/apartments')
    //     .then((r)=>r.json())
    //     .then((data)=> setApartment(data))
    //   },[])
    const [clicked, setClicked ] = useState(false)

    return(
        <div>
            <h1>Apartment</h1>
        {apartment.map((apt)=>(
            < ApartmentCard key={apt.id} tenant={apt.tenants} name={apt.name} location={apt.location} id={apt.id} clicked={clicked} setClicked={setClicked} />
            ))}

        </div>
    )
}

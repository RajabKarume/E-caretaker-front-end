import ApartmentCard from "./ApartmentCards";

export default function Apartments({apartment, handleClick}){
    // const[apartment, setApartment] = useState([])

    // useEffect(()=>{
    //     fetch('http://127.0.0.1:3000/apartments')
    //     .then((r)=>r.json())
    //     .then((data)=> setApartment(data))
    //   },[])
    return(
        <div>
            <h1>Apartment</h1>
        {apartment.map((apt)=>(
            < ApartmentCard  name={apt.name} location={apt.location} key={apt.id}/>
            ))}

        </div>
    )
}

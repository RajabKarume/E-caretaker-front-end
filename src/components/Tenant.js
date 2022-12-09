import React from "react";
import AddTenant from "./AddTenant";
// import Display from "./Display";

export default function Tenant({tenant}){
    // const [status, setStatus] = useState("")


    // const[tenant, setTenant] = useState([])

    // useEffect(()=>{
    //     fetch('http://127.0.0.1:3000/tenants')
    //     .then((r)=>r.json())
    //     .then((data)=> setTenant(data))
    //   },[])
    //   console.log(tenant)
    const tableStyle={
        border: "10px solid #ddd",
        padding: "8px",
        width:"100%"
    }
    const thStyle={
        paddingTop: "12px",
        paddingBottom: "12px",
        textAlign: "left",
        backgroundColor: "#04AA6D",
        color: "white",
        paddingLeft: "2000px",
        fontSize: "25px"
    }


    function handleClick(id){
        fetch(`http://127.0.0.1:3000/tenants/${id}`, {method:'DELETE'})
            .then((r)=> r.json())
            .then((result)=> console.log(result))
        }

        
    return(
        <div style={{paddingTop:"50px"}} className="table" >
            
            <AddTenant />
        <table style={tableStyle} className="table table-success table-striped">
            <thead>
                <tr style={thStyle} >
                    <th>DELETE</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>PHONE NUMBER</th>
                    <th>HOUSE NUMBER</th>
                    <th>NUMBER OF BEDROOMS</th>
                    <th>RENT</th>
                    <th>PAYMENT STATUS</th>

                </tr>
            </thead>
            <tbody>
                {tenant.map((tnt)=>(
                    
                    <tr key={tnt.id} style={{fontSize: "25px"}} >
                        <button onClick={handleClick} >DELETE</button>
                        <td>{tnt.name}</td>
                        <td>{tnt.email}</td>
                        <td>+{tnt.phone_number}</td>
                        <td>{tnt.house_number}</td>
                        <td>{tnt.number_of_bedrooms}</td>
                        <td>{tnt.rent}</td>
                        <td>{tnt.is_paid? "paid" : "not paid"}</td>
                    </tr>

                    
                    ))}
            </tbody>
        </table>
        </div>
    )
}
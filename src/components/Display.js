import React from "react";


function Display({name, email, phoneNo, houseNo, noOfBedrooms, rent, status, key}){

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
    return(
        <div style={{paddingTop:"50px"}} className="table" >
        <table style={tableStyle} class="table table-success table-striped">
            <thead>
                <tr style={thStyle} >
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
                    <tr style={{fontSize: "25px"}} key={key}>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>+{phoneNo}</td>
                        <td>{houseNo}</td>
                        <td>{noOfBedrooms}</td>
                        <td>{rent}</td>
                        <td>{status}</td>
                    </tr>
            </tbody>
        </table>
        </div>
    )
}

export default Display;
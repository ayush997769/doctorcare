import React from "react";
import Navbar from "../../component/Navbar/Navbar";
import './Appointment.css'
import ItemWrapper from "../../component/ItemWrapper/ItemWrapper";
const Appointment = ()=>{
    const data = [
        {
            id:1,name:"Amit Singh",speciality:"Lawyer",
            backgroundColor:"#f2f2f2"
        },
        {
            id:2,name:"Ankit Verma",speciality:"doctor",
            backgroundColor:"#fff"
        },
        {
            id:3,name:"Ayush shukla",speciality:"Developer",
            backgroundColor:"#f2f2f2"
        }
    ]

    return(
        <div className="appointment-ctn">
            <Navbar/>
            <div className="bottom-sec">
                {
                    data.map(item => <ItemWrapper item={item}/>)
                }
            </div>
        </div>
    )
}



export default Appointment
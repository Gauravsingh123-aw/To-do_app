import { useState } from "react";
import { IoIosRemoveCircle} from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { IoArrowBackCircle } from "react-icons/io5";
import "./App.css"
import { useNavigate } from "react-router-dom";
export default function Box(){
    let navigate=useNavigate();
    let handleBack=()=>{
        navigate(-1);
    }
    return(
        <div className="box-main">
            <IoArrowBackCircle className="left-arrow"  onClick={handleBack}/>
        <div className="main-container">
            <div className="title-box">
                <span>Title</span>
                <span><FaEdit /><IoIosRemoveCircle /></span>
            </div>
            <div className="body-box">
                Body
                sksl
                sksla

            </div>
        </div>
        </div>
    )
}

import { IoArrowBackCircle } from "react-icons/io5";
import "./App.css"
import { useState } from "react";

export default function Box(prop){
    let setFlag=prop.setFlagfun;
    let data=prop.data;
    let setNote=prop.setFun;
    // let [state,setState]=useState({});
    let handleChange=()=>{
        let name=event.target.name;
        let value=event.target.value;
        let obj={}
    }
    return(
        <div className="box-main">
            <IoArrowBackCircle className="left-arrow"  onClick={()=>setFlag(false)}/>
        <div className="main-container">
            <div className="title-box"><input defaultValue={data.title} onChange={handleChange} name="title"/>
            </div>
            <div className="body-box">
                <textarea defaultValue={data.body} onChange={handleChange} name="body"/>
            </div>
        </div>
        </div>
    )
}
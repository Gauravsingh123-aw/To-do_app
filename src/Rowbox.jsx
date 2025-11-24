import { useState, useSyncExternalStore } from "react";
import "./App.css"
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import Box from "./Box";

 export default function Rowbox(prop) {
    let [flag,setFlag]=useState(false);
    let data=prop.prop;
    let setNote=prop.prop2;
    let handleDelete=(uid)=>{
        setNote(note=>note.filter(item=>item.uid!==uid));
    }
    let handleEdit=(uid)=>setFlag(true);

    return (

        <div className="main-rowbox">
            { !flag ?<>
            <div className="row-text">
                <span className="row-title">{data.title}</span>
                <span className="row-body">{data.body}</span>
            </div>
            <div className="row-actions">
                <FaEdit className="action-icon edit" onClick={()=>handleEdit(data.uid)}/>
                <IoIosRemoveCircle className="action-icon delete" onClick={()=>handleDelete(data.uid)}/>
            </div></>
            :
            <div className="main-rowbox" ><Box data={data} setFun={setNote} setFlagfun={setFlag}/></div>
            }  
        </div>

    )
}

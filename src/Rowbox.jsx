import { useState, useSyncExternalStore } from "react";
import "./App.css"
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";

export default function Rowbox(prop) {
    const [data, setData] = useState(prop.prop);
    let handleDelete=()=>{
       
    }
    return (

        <div className="main-rowbox">
            <div className="row-text">
                <span className="row-title">{data.title}</span>
                <span className="row-body">{data.body}</span>
            </div>
            <div className="row-actions">
                <FaEdit className="action-icon edit" />
                <IoIosRemoveCircle className="action-icon delete" onClick={handleDelete}/>
            </div>
        </div>

    )
}

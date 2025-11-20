import { useState } from "react"
import { FcApproval } from "react-icons/fc";
import { MdCancel } from "react-icons/md";
export default function CreateNote(prop) {
    let setNotes=prop.flag;
    let setNotesData=prop.flag2;

    let [data, setData] = useState({title:"",body:""});
    let handleCancel=()=>{
        setNotes(false);
    }
    
    let handleInput=(event)=>{
        let name=event.target.name;
        let value=event.target.value;
        setData({...data,[name]:value});
    }
    let handleSavenote=()=>{
        setNotesData(note=>[...note,data]);
        setData({title:"",body:""})
    }
    return (
        <div className="createnote-main">
            <input type="text" placeholder="Enter title" onChange={handleInput} name="title" value={data.title}/>
            <textarea placeholder="Enter body"  onChange={handleInput} name="body" value={data.body}/>
            <div className="action-buttons">
                <MdCancel className="action-buttons1" onClick={handleCancel}/>
                <FcApproval className="action-buttons1" onClick={handleSavenote} />
            </div>
        </div>

    )
}
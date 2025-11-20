import { useState } from "react";
import Rowbox from "./Rowbox";
import { useNavigate } from "react-router-dom"
import "./App.css"
import { RiEditBoxLine } from "react-icons/ri";
import CreateNote from "./CreateNote";
export default function Todo() {
    let navigate = useNavigate();
    let [newNote,setNewNote]=useState(false);
    let [notes, setNotes] = useState([]);
    let handleRowbox = () => {
        navigate("/box")
    }
    let handleNewNote=()=>{
        setNewNote(note=>note=1);
    }
    return (
        <div className="main-todo">
            {/* heading */}
            <div className="title-heading">
                <span className="sub-head1">To-Do List</span>
                <span className="sub-head2">Stay organized, one task at a time</span>
            </div>

            {/* body */}
            <div className="body-todo">
                <h3 onClick={handleNewNote}>Create New note <RiEditBoxLine /></h3>
                {newNote==true && <CreateNote flag={setNewNote} flag2={setNotes}/>}
                {notes.length ? notes.map((ele, ind) => (<div onClick={handleRowbox} key={ind}><Rowbox prop={ele} /></div>)) : <span>Add note to see here <RiEditBoxLine /></span>}

            </div>

        </div>
    )
}
import { useState, useEffect } from "react";
import Rowbox from "./Rowbox";
import { useNavigate } from "react-router-dom"
import "./App.css"
import { RiEditBoxLine } from "react-icons/ri";
import CreateNote from "./CreateNote";

export default function Todo() {
    const navigate = useNavigate();
    const [newNote, setNewNote] = useState(false);
    const [notes, setNotes] = useState([]); // storage
    const [selectedColor, setSelectedColor] = useState('indigo');
    const [theme, setTheme] = useState(() => {
        try {
            return localStorage.getItem('qnotes-theme') || 'light';
        } catch (e) {
            return 'light';
        }
    });

    const colors = {
        indigo: { accent: '#646cff', accent2: '#7c86ff' },
        teal: { accent: '#06b6d4', accent2: '#4dd6e1' },
        coral: { accent: '#fb7185', accent2: '#ff9aa2' },
        lime: { accent: '#84cc16', accent2: '#b7e04b' }
    }

    useEffect(() => {
        // Apply selected accent colors to CSS variables at runtime
        const c = colors[selectedColor] || colors.indigo;
        document.documentElement.style.setProperty('--accent', c.accent);
        document.documentElement.style.setProperty('--accent-2', c.accent2);
    }, [selectedColor]);

    useEffect(() => {
        // Apply theme to document and persist
        document.documentElement.setAttribute('data-theme', theme);
        try { localStorage.setItem('qnotes-theme', theme); } catch (e) {}
    }, [theme]);


    const handleNewNote = () => setNewNote(true);

    return (
        <div className="page-wrap">
            <div className="main-todo container page-grid">
                
                {/* navbar */}
                <nav className="navbar">
                <div className="nav-left">
                    <div className="brand">
                        <div className="brand-mark" />
                        <div className="brand-text">
                            <strong>QuickNotes</strong>
                            <small>Todo</small>
                        </div>
                    </div>
                </div>
                <div className="nav-right">
                    <div className=" ">
                        <button className="nav-btn" onClick={() => navigate('/')}>Home</button>
                        <button className="nav-btn" onClick={() => navigate('/box')}>Board</button>
                        <button className="nav-btn" onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}>
                            {theme === 'light' ? 'Dark' : 'Light'}
                        </button>
                    </div>
                </div>
            </nav>

            {/* heading */}
            <header className="title-heading">
                <div>
                    <span className="sub-head1">To-Do List</span>
                    <div className="sub-head2">Stay organized, one task at a time</div>
                </div>
                <div className="meta">
                    <div className="note-count">{notes.length} notes</div>
                    <div className="create-cta" onClick={handleNewNote}>Create New <RiEditBoxLine /></div>
                </div>
            </header>

                {/* color selection and body */}
                <main className="main-content">
                    <section className="controls">
                        <div className="color-label">Accent</div>
                        <div className="color-swatches">
                            {Object.keys(colors).map(key => (
                                <button
                                    key={key}
                                    className={`swatch ${selectedColor === key ? 'active' : ''}`}
                                    title={key}
                                    onClick={() => setSelectedColor(key)}
                                    style={{ background: `linear-gradient(90deg, ${colors[key].accent}, ${colors[key].accent2})` }}
                                />
                            ))}
                        </div>
                    </section>

                    <section className="notes-list">
                        {newNote === true && <CreateNote flag={setNewNote} flag2={setNotes} />}
                        {notes.length ? (
                            notes.map((ele, ind) => (
                                <div  key={ind}><Rowbox prop={ele}  prop2={setNotes}/></div>
                            ))
                        ) : (
                            <div className="empty-state">No notes yet — add one to get started <RiEditBoxLine /></div>
                        )}
                    </section>
                </main>

                <aside className="side-right">
                    <div className="panel recent-panel">
                        <h4>Recent</h4>
                        <div className="recent-list">
                            {notes.length ? (
                                notes.slice(-5).reverse().map((n, i) => (
                                    <div key={i} className="recent-item">{n.title || `Note ${notes.length - i}`}</div>
                                ))
                            ) : (
                                <div className="muted">No recent activity</div>
                            )}
                        </div>
                        <hr />
                        <div className="muted">Theme: <strong>{theme}</strong></div>
                    </div>
                </aside>
            </div>
        </div>
    )
}
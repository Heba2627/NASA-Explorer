import { useState, useEffect, use } from 'react';
import { useReducer } from 'react';
function UseLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : initialValue;
    });
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, setValue];
}
export function Notes() {
    const [note, setNote] = UseLocalStorage("note", "");
    const [notes, setNotes] = UseLocalStorage("notes", []);
    const [isDarkTheme, setIsDarkTheme] = UseLocalStorage("theme", "light");


    function edit() {
        setNotes([...notes, { note: note }]);
        setNote("");
    }
    function edit2(index, note) {
        return()=>
        {if(note) {
            const newNotes = [...notes];
            newNotes.splice(index, 1);
            setNotes(newNotes);
            setNote("");
        }} 
    }
    function edit3(index) { 
      return  () => {
        const newNotes = [...notes];
        newNotes[index].note = note;
        setNotes(newNotes);
        setNote("");
      }  
    }

    useEffect(() => {
        document.body.style.backgroundColor = isDarkTheme === "dark" ? "#333" : "#FFF";
        document.body.style.color = isDarkTheme === "dark" ? "#FFF" : "#333";
    }, [isDarkTheme]);

    console.log(note);
    return (
        <div>
            <form>
                <h1>
                    <button onClick={() => setIsDarkTheme(isDarkTheme === "light" ? "dark" : "light")}>Change Theme</button>     
                </h1>
                <h2>
                    <input type="text" placeholder="Enter Note"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                    />
                </h2>
            </form>
            <button type="submit" onClick={edit}>Add Note</button>
            <ul>
                {notes.map((item, index) => (
                    <li key={index}>
                        <span>{item.note}</span>
                        <button onClick={edit2(index, item.note)}>Delete</button>
                        <button onClick={edit3(index)}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Notes;
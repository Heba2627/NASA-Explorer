import React, { useEffect ,useState } from 'react';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {Navigate , useNavigate } from 'react-router-dom';

export default function CreatePost()
{
    
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    let navigate = useNavigate();

    function Edit(event) {
        fetch('http://10.191.240.65:5000/posts', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ title: title, content: content }) })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error("Error:", error));
        navigate('/post');
    }
return(
<div>
    <form>
            <input type="text" placeholder="Enter Title" 
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            />
            <input type="text" placeholder="Body"
            value={content}
            onChange={(e)=>setContent(e.target.value)}
            />
            </form>
            <button type="submit" onClick={Edit}>Add Post</button>
            </div>
);
}
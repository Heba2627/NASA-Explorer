/*import React, { useEffect ,useState } from 'react';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function ShowPost()
{
    const {id}=useParams();
    const [post,setPost]=useState(null);
    useEffect(() => {
            fetchData();
        }, []);

        const fetchData = () => {
            fetch(`http://10.191.240.65:5000/posts`)
                .then((response) => response.json())
                .then((post) => {
                    setPost(post);
                })
                .catch((error) => {
                    console.error("Error showing posts:", error);
                })
        }
        for
        console.log(post);  
        return (
            <div>
                <h1>Post</h1>
                {post && (
                    <div>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                    </div>
                )}
            </div>
        )
    }
*/
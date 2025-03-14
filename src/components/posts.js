import React, { useEffect ,useState } from 'react';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';

export default function Posts()
{
    const [posts,setPosts]=useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch('http://10.191.240.65:5000/posts')
            .then((response) => response.json())
            .then((posts) => {
                setPosts(posts);
            })
            .catch((error) => {
                console.error("Error showing posts:", error);
            })
    }

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post._id}>
                        <Link to={`/post/${post._id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
import React from "react";
import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const[name, setName] = useState('mario');
    const[blogs, setBlogs] = useState(null);
    
    useEffect(()=>{
        fetch('http://localhost:8000/blogs')
            .then((res)=>{
                return res.json();
            }).then((data)=>{
                return setBlogs(data);
            })
    },[name])

    return (
        <div className="homePage">
           {blogs && <BlogList blogs={blogs} title='All Blogs!!'/>}
        </div>
    );
}
 

export default Home;
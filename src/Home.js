import React from "react";
import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const[blogs, setBlogs] = useState([
        {title: 'My new Website', body: 'lorem ipsum...', author: 'mario', id: 1},
        {title: 'Welcome Party', body: 'lorem ipsum...', author: 'yoshi', id: 2},
        {title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3},
    ]);
    const handleDelete = (id)=>{
        const newBlogs = blogs.filter((blog)=> blog.id !== id);
        setBlogs(newBlogs);
    }
    useEffect(()=>{
        console.log('Use effect ran');
    })

    return (
        <div className="homePage">
           <BlogList blogs={blogs} title="Mario's Blogs" handleDelete={handleDelete} />
        </div>
    );
}
 

export default Home;
import React from "react";
import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const[name, setName] = useState('mario');
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
        console.log(name);
    },[name])

    return (
        <div className="homePage">
           <BlogList blogs={blogs} title="Mario's Blogs" handleDelete={handleDelete} />
           <p>{name}</p>
           <button onClick={()=> setName('George')}>Change Name</button>
        </div>
    );
}
 

export default Home;
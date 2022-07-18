import React from "react";
import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import UseFetch from "./useFetch";

const Home = () => {
    const{data: blogs, pending, error} = UseFetch('http://localhost:8000/blogs')
    return (
        <div className="home">
            {pending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blogs && <BlogList blogs={blogs}/>}
        </div>
    );
}
 
export default Home;

import React from "react";

const Home = () => {
    const handleClick = (e) =>{
        console.log(e);
    }
    const handleClickAgain = (name, e)=>{
        console.log(`Hi, my name is ${name}`, e.target);
    }

    return (
        <div className="homepage">
            <h2 className="title">Homepage</h2>
            <button onClick={handleClick}>Clicke Me</button>
            <button onClick={(e)=> handleClickAgain('Yoshi', e)}>Click Me Again</button>
        </div>
    );
}
 

export default Home;
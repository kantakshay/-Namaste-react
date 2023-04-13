import React from 'react'
import ReactDOM from 'react-dom/client'

const HeadedComponent = () =>(
   <div>
    <h1>Hello Akshay!</h1>
    <h2>how are you</h2>
    </div>
);


const root =   ReactDOM.createRoot(document.getElementById('root')) 

root.render(HeadedComponent())

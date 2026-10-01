import { useState } from "react"
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";

function HomePage(){
    return <h1>Home PAge</h1>
}

function AboutPage(){
    return <h1>About Page</h1>
}


function App(){
    return (
        <div>
            <nav>
                <Link></Link>
            </nav>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
        </div>
    )
}
export default App;
import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import NavbarLayout from "./elements/navbar/NavbarLayout" ;
function Home(){
    return <><NavbarLayout /></>
}
function About(){
    return <><NavbarLayout /></>
}
function Service(){
    return <><NavbarLayout /></>

}
function Partner(){
    return <><NavbarLayout /></>
}
function Contact(){
    return <><NavbarLayout /></>
}
export default function App(){
    return <>
    <BrowserRouter>
    <Routes>
        <Route path="/">
        <Route path="/" element={<Home />}></Route>
        <Route path="/About-Us" element={<About />}></Route>
        <Route path="/Service" element={<Service />}></Route>
        <Route path="/Partner-with-us" element={<Partner />}></Route>
        <Route path="/Contact-Us" element={<Contact />}></Route>
        <Route path="*" element={<h1>404</h1>}></Route>
        </Route>
    </Routes>
    </BrowserRouter>
    </>
}
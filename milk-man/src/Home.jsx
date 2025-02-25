import React from "react";
import NavbarLayout from "./elements/navbar/Navbar";
import FormVillage from "./elements/form-village/FormVillage";
import Footer from "./elements/footer/Footer";
export default function Home(){
    return (<>
    <NavbarLayout />
    <p>this is our home page</p>
    <FormVillage />
    <Footer /></>);

}
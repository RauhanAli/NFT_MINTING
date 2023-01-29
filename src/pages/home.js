import React from "react";
import Header from "../components/navbar";
import Footer from "../components/footer";
import Wallet from "../components/connectWallet";
import Gallery from "../components/gallery";
export default function Home(){
    return(
        <>
            <Header />
            <Wallet />
            <Gallery />
            <Footer />        
        </>
    )
}
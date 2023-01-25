import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import Logo from '../Assets/logo.png'



const Footer = () => {
  return (
    <footer className="bg-dark  text-white p-2" variant="dark" style={{marginTop: "2rem"}}>
    <div className="container">
        <div className="row" >
            <div style={{ textAlign: "center"}}>
            <img style={{ width: "7rem" }} src={Logo} alt='Logo de Rick & Morty' />
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer;
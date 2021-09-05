import React from 'react'
import Navbar from '../components/Navbar'
const Layout = (props) => {
    console.log("layout"+ props.isLogged)
    return (
        <>
            <Navbar isLogged={props.isLogged}/>
            {props.children}
        </>
    )
}

export default Layout

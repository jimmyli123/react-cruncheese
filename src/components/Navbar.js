import React from 'react'
import { Button, Nav} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import { Link, useNavigate} from 'react-router-dom'
import logo from '../imgs/cruncheese-logo.jpeg'



function Navbar() {
    return (
        <Nav>
            <img src={logo} alt="" style={{width: "120px"}} srcset="" />
            <Nav.Item>
                <Nav.Link href="/home">HOME</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/menu">MENU</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/gallery">GALLERY</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/onlineorder">
                    ONLINE ORDER
                </Nav.Link>
            </Nav.Item>
    </Nav>

    )
}

export default Navbar;
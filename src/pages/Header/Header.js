import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';



const Header = () => {
    const {user,logout} = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="/home">TOUR-DIBO</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About US</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact US</Nav.Link>
                        {user?.email ?
                            <div className="d-flex flex-row">
                                <Nav.Link as={Link} to="/myOrders">My Orders</Nav.Link>
                                <Nav.Link as={Link} to="/manageOrder">Manage Orders</Nav.Link>
                                <Nav.Link as={Link} to="/addService">Add Service</Nav.Link>
                                <button className="btn btn-danger" onClick={logout}>Logout</button>
                            </div>
                            :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                        {user.email && 
                        <Navbar.Text>
                        Signed in as: <img src={user?.photoURL} width="50px" className="img-fluid" style={{borderRadius:"50%"}} alt="" /> { user?.displayName}
                    </Navbar.Text>}
                        
                    </Navbar.Collapse>
                    
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
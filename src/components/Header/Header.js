import React from 'react';
import './Header.css'
import { Navbar,NavbarBrand,Nav,NavItem} from 'reactstrap';
import {NavLink} from 'react-router-dom'
import Logo from '../../assets/logo.png'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
    return {
        token: state.token,
    }
}

const Header = props => {
    let links = null;
    if(props.token === null){
        links = (
            <Nav className="mr-md-5">              
                        <NavItem>
                            <NavLink exact to="/login" className="Navlink" >Login</NavLink>
                        </NavItem>
                    </Nav>
        )
    } else {
        links = (
            <Nav className="mr-md-5">
                        <NavItem>
                            <NavLink exact to="/" className="Navlink" >BurgerBuilder</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink exact to="/orders" className="Navlink" >Orders</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink exact to="/logout" className="Navlink" >Logout</NavLink>
                        </NavItem>
                    </Nav>
        )
    }
    return (
        <div className="Navigation">
            <Navbar className="navbar">
                <NavbarBrand className="mr-auto ml-md-5 Brand" href="/">
                    <img className="logoimage" src={Logo} alt="Logo" width="90px" />
                </NavbarBrand>   
                    {links}
            </Navbar>
        </div>
    )
}

export default connect(mapStateToProps)(Header);

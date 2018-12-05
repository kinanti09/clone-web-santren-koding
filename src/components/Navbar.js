import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggeler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownMenu,
    DropdownItem } from 'reactstrap'


class NavBar extends Component{
    render(){
        return(
            <div>
                <Navbar>
                    <NavbarBrand>Santren Koding</NavbarBrand>
                    <Nav>
                        <NavItem>Kajian Koding</NavItem>
                        <NavItem>Mondok Koding</NavItem>
                        <NavItem>Kitab Koding</NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;
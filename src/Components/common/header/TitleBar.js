// Import React from 'react'
import React from 'react';

// Installed NPM package manager for 'react-bootstrap'
// Import Navbar from 'react-bootstrap'
import {Navbar} from 'react-bootstrap';

export default function TitleBar() {
    return (
        <div>
            {/* ------------------------------------- Top Bar Section ------------------------------------- */}
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">
                    LOGO
                </Navbar.Brand>
            </Navbar>
        </div>
    )
}
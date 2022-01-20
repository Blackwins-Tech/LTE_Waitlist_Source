import React from 'react';

// Import ActionArea CSS File
// import "./ActionArea.css";
import "./ActionArea.css";

// Install NPM package manager for 'react-bootstrap'
// Import Button from 'react-bootstrap'
import {Button} from 'react-bootstrap';

export default function CancelButton() {
    return (
        <div>
            <Button variant="danger" className="btn-cancel">CANCEL</Button> {/* Button - CANCEL */}
        </div>
    )
}
import React from 'react';

// Import ActionArea CSS File
// import "./ActionArea.css";
import "./ActionArea.css";

// Install NPM package manager for 'react-bootstrap'
// Import Button from 'react-bootstrap'
import {Button} from 'react-bootstrap';

export default function SubmitButton() {
    return (
        <div>
            <Button variant="primary" className="btn-submit">SUBMIT</Button> {/* Button - SUBMIT */}
        </div>
    )
}
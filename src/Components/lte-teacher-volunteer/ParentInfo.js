// Import React from 'react'
import React from 'react';

// Install NPM package manager for 'react-bootstrap'
// Import Form from 'react-bootstrap'
import {Form} from 'react-bootstrap';

export default function ParentInfo({ formData, setFormData, validationRes, setValidationRes }) {
    return (
        <div>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Parent's Name</Form.Label>

                    <Form.Control type="name" name="parentname" placeholder="Enter your name"
                    value={formData.parentname}
                    onChange = { (event) => { setFormData({...formData, parentname: event.target.value});
                    setValidationRes({...validationRes, isInvalidParentName: false}) }}
                    isInvalid = {validationRes.isInvalidParentName} />

                    <Form.Control.Feedback type="invalid">
                        Parent Name is mandatory and should be less than 20 characters.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Parent's Mobile Number</Form.Label>

                    <Form.Control type="number" name="parentmobilenumber" placeholder="Enter your number"
                    value={formData.parentmobilenumber}
                    onChange = { (event) => { setFormData({...formData, parentmobilenumber: event.target.value});
                    setValidationRes({...validationRes, isInvalidParentMobileNumber: false}) }}
                    isInvalid = {validationRes.isInvalidParentMobileNumber} />

                    <Form.Control.Feedback type="invalid">
                        Parent mobile number must contains 10 digits.
                    </Form.Control.Feedback>
                </Form.Group>
            </Form>
        </div>
    )
}